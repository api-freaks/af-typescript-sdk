"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormDataWrapper = void 0;
exports.newFormData = newFormData;
const index_js_1 = require("../../core/file/index.js");
const json_js_1 = require("../../core/json.js");
const index_js_2 = require("../runtime/index.js");
async function newFormData() {
    return new FormDataWrapper();
}
class FormDataWrapper {
    constructor() {
        this.fd = new FormData();
    }
    async setup() {
        // noop
    }
    append(key, value) {
        this.fd.append(key, String(value));
    }
    async appendFile(key, value) {
        const { data, filename, contentType } = await (0, index_js_1.toMultipartDataPart)(value);
        const blob = await convertToBlob(data, contentType);
        if (filename) {
            this.fd.append(key, blob, filename);
        }
        else {
            this.fd.append(key, blob);
        }
    }
    getRequest() {
        return {
            body: this.fd,
            headers: {},
            duplex: "half",
        };
    }
}
exports.FormDataWrapper = FormDataWrapper;
function isStreamLike(value) {
    return typeof value === "object" && value != null && ("read" in value || "pipe" in value);
}
function isReadableStream(value) {
    return typeof value === "object" && value != null && "getReader" in value;
}
function isBuffer(value) {
    return typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(value);
}
function isArrayBufferView(value) {
    return ArrayBuffer.isView(value);
}
async function streamToBuffer(stream) {
    if (index_js_2.RUNTIME.type === "node") {
        const { Readable } = await Promise.resolve().then(() => __importStar(require("stream")));
        if (stream instanceof Readable) {
            const chunks = [];
            for await (const chunk of stream) {
                chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
            }
            return Buffer.concat(chunks);
        }
    }
    if (isReadableStream(stream)) {
        const reader = stream.getReader();
        const chunks = [];
        try {
            while (true) {
                const { done, value } = await reader.read();
                if (done)
                    break;
                chunks.push(value);
            }
        }
        finally {
            reader.releaseLock();
        }
        const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
        const result = new Uint8Array(totalLength);
        let offset = 0;
        for (const chunk of chunks) {
            result.set(chunk, offset);
            offset += chunk.length;
        }
        return Buffer.from(result);
    }
    throw new Error(`Unsupported stream type: ${typeof stream}. Expected Node.js Readable stream or Web ReadableStream.`);
}
async function convertToBlob(value, contentType) {
    if (isStreamLike(value) || isReadableStream(value)) {
        const buffer = await streamToBuffer(value);
        return new Blob([buffer], { type: contentType });
    }
    if (value instanceof Blob) {
        return value;
    }
    if (isBuffer(value)) {
        return new Blob([value], { type: contentType });
    }
    if (value instanceof ArrayBuffer) {
        return new Blob([value], { type: contentType });
    }
    if (isArrayBufferView(value)) {
        return new Blob([value], { type: contentType });
    }
    if (typeof value === "string") {
        return new Blob([value], { type: contentType });
    }
    if (typeof value === "object" && value !== null) {
        return new Blob([(0, json_js_1.toJson)(value)], { type: contentType ?? "application/json" });
    }
    return new Blob([String(value)], { type: contentType });
}
