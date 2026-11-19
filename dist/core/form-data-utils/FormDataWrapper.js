"use strict";
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
    append(key, value, contentType) {
        if (contentType != null) {
            this.fd.append(key, new Blob([String(value)], { type: contentType }), "");
            return;
        }
        this.fd.append(key, String(value));
    }
    async appendFile(key, value) {
        if (value == null) {
            throw new Error(`File upload for "${key}" received ${value === null ? "null" : "undefined"}. The generated code should not call appendFile with null/undefined — check that optional file fields are guarded before this call.`);
        }
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
        const { Readable } = await import("stream");
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
