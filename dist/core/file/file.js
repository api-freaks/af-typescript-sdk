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
exports.toBinaryUploadRequest = toBinaryUploadRequest;
exports.toMultipartDataPart = toMultipartDataPart;
async function toBinaryUploadRequest(file) {
    const { data, filename, contentLength, contentType } = await getFileWithMetadata(file);
    const request = {
        body: data,
        headers: {},
    };
    if (filename) {
        request.headers["Content-Disposition"] = `attachment; filename="${filename}"`;
    }
    if (contentType) {
        request.headers["Content-Type"] = contentType;
    }
    if (contentLength != null) {
        request.headers["Content-Length"] = contentLength.toString();
    }
    return request;
}
async function toMultipartDataPart(file) {
    const { data, filename, contentType } = await getFileWithMetadata(file, {
        noSniffFileSize: true,
    });
    return {
        data,
        filename,
        contentType,
    };
}
async function getFileWithMetadata(file, { noSniffFileSize } = {}) {
    if (isFileLike(file)) {
        return getFileWithMetadata({
            data: file,
        }, { noSniffFileSize });
    }
    if ("path" in file) {
        const fs = await Promise.resolve().then(() => __importStar(require("fs")));
        if (!fs?.createReadStream) {
            throw new Error("File path uploads are not supported in this environment.");
        }
        const data = fs.createReadStream(file.path);
        const contentLength = file.contentLength ?? (noSniffFileSize === true ? undefined : await tryGetFileSizeFromPath(file.path));
        const filename = file.filename ?? getNameFromPath(file.path);
        return {
            data,
            filename,
            contentType: file.contentType,
            contentLength,
        };
    }
    if ("data" in file) {
        const data = file.data;
        const contentLength = file.contentLength ??
            (await tryGetContentLengthFromFileLike(data, {
                noSniffFileSize,
            }));
        const filename = file.filename ?? tryGetNameFromFileLike(data);
        return {
            data,
            filename,
            contentType: file.contentType ?? tryGetContentTypeFromFileLike(data),
            contentLength,
        };
    }
    throw new Error(`Invalid FileUpload of type ${typeof file}: ${JSON.stringify(file)}`);
}
function isFileLike(value) {
    return (isBuffer(value) ||
        isArrayBufferView(value) ||
        isArrayBuffer(value) ||
        isUint8Array(value) ||
        isBlob(value) ||
        isFile(value) ||
        isStreamLike(value) ||
        isReadableStream(value));
}
async function tryGetFileSizeFromPath(path) {
    try {
        const fs = await Promise.resolve().then(() => __importStar(require("fs")));
        if (!fs?.promises?.stat) {
            return undefined;
        }
        const fileStat = await fs.promises.stat(path);
        return fileStat.size;
    }
    catch (_fallbackError) {
        return undefined;
    }
}
function tryGetNameFromFileLike(data) {
    if (isNamedValue(data)) {
        return data.name;
    }
    if (isPathedValue(data)) {
        return getNameFromPath(data.path.toString());
    }
    return undefined;
}
async function tryGetContentLengthFromFileLike(data, { noSniffFileSize } = {}) {
    if (isBuffer(data)) {
        return data.length;
    }
    if (isArrayBufferView(data)) {
        return data.byteLength;
    }
    if (isArrayBuffer(data)) {
        return data.byteLength;
    }
    if (isBlob(data)) {
        return data.size;
    }
    if (isFile(data)) {
        return data.size;
    }
    if (noSniffFileSize === true) {
        return undefined;
    }
    if (isPathedValue(data)) {
        return await tryGetFileSizeFromPath(data.path.toString());
    }
    return undefined;
}
function tryGetContentTypeFromFileLike(data) {
    if (isBlob(data)) {
        return data.type;
    }
    if (isFile(data)) {
        return data.type;
    }
    return undefined;
}
function getNameFromPath(path) {
    const lastForwardSlash = path.lastIndexOf("/");
    const lastBackSlash = path.lastIndexOf("\\");
    const lastSlashIndex = Math.max(lastForwardSlash, lastBackSlash);
    return lastSlashIndex >= 0 ? path.substring(lastSlashIndex + 1) : path;
}
function isNamedValue(value) {
    return typeof value === "object" && value != null && "name" in value;
}
function isPathedValue(value) {
    return typeof value === "object" && value != null && "path" in value;
}
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
    return typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView(value);
}
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer;
}
function isUint8Array(value) {
    return typeof Uint8Array !== "undefined" && value instanceof Uint8Array;
}
function isBlob(value) {
    return typeof Blob !== "undefined" && value instanceof Blob;
}
function isFile(value) {
    return typeof File !== "undefined" && value instanceof File;
}
