import type * as ApifreaksApi from "../../index.js";
/**
 * @example
 *     {
 *         apiKey: "apiKey",
 *         url: "url"
 *     }
 */
export interface ScreenshotCaptureRequest {
    /** Your API key */
    apiKey: string;
    /** Output format for screenshot results */
    output?: ApifreaksApi.ScreenshotCaptureRequestOutput;
    /** File type for screenshot output */
    file_type?: ApifreaksApi.ScreenshotCaptureRequestFileType;
    /** URLs to capture screenshots of */
    url: string;
    /** Browser viewport width in pixels */
    width?: number;
    /** Browser viewport height in pixels */
    height?: number;
    /** Capture a full-page screenshot */
    full_page?: boolean;
    /** Bypass cache and take a fresh screenshot */
    fresh?: boolean;
    /** Remove cookie banners from the screenshot */
    no_cookie_banners?: boolean;
    /** Enable caching for repeated requests */
    enable_caching?: boolean;
    /** Block advertisements on the page */
    block_ads?: boolean;
    /** Block chat widget scripts from loading */
    block_chat_widgets?: boolean;
    /** Extract visible text from the page */
    extract_text?: boolean;
    /** Extract HTML content of the page */
    extract_html?: boolean;
    /** Auto-destroy screenshot after fetch */
    destroy_screenshot?: boolean;
    /** Enable lazy-loading content before screenshot */
    lazy_load?: boolean;
    /** Capture screenshot in high-DPI (Retina) mode */
    retina?: boolean;
    /** Render page in dark mode */
    dark_mode?: boolean;
    /** Block common user-tracking scripts */
    block_tracking?: boolean;
    /** Enable private/incognito mode for browser session */
    enable_incognito?: boolean;
    /** Omit background color (transparent background) */
    omit_background?: boolean;
    /** Thumbnail width in pixels */
    thumbnail_width?: number;
    /** Adjust top in pixels */
    adjust_top?: number;
    /** Wait for a specific load event before capturing the screenshot. */
    wait_for_event?: ApifreaksApi.ScreenshotCaptureRequestWaitForEvent;
    /** Range:0 to 100 for grayscale filter */
    grayscale?: number;
    /** How many milliseconds to wait before taking the screenshot */
    delay?: number;
    /** Maximum timeout in milliseconds. Defalut is `10,000` */
    timeout?: number;
    /** Number of seconds the screenshot should be cached */
    ttl?: number;
    /** X position of the clipping rectangle in pixels */
    "clip[x]"?: number;
    /** Y position of the clipping rectangle in pixels */
    "clip[y]"?: number;
    /** Width of the clipping rectangle in pixels */
    "clip[width]"?: number;
    /** Height of the clipping rectangle in pixels */
    "clip[height]"?: number;
    /** URL to CSS file */
    css_url?: string;
    /** Your custom CSS code */
    css?: string;
    /** URL to JS file */
    js_url?: string;
    /** Your JS code */
    js?: string;
    /** Block Scripts */
    block_js?: boolean;
    /** Block Stylesheets */
    block_stylesheets?: boolean;
    /** Block Images */
    block_images?: boolean;
    /** Block Media */
    block_media?: boolean;
    /** Block Fonts */
    block_font?: boolean;
    /** Block Text Tracks */
    block_text_track?: boolean;
    /** Block XHR Requests */
    block_xhr?: boolean;
    /** Block Fetch Requests */
    block_fetch?: boolean;
    /** Block Event Source */
    block_event_source?: boolean;
    /** Block Web Sockets */
    block_web_socket?: boolean;
    /** Block Manifest */
    block_manifest?: boolean;
    /** Comma- or newline-separated list of specific requests to block. Each line and comma are treated as separate requests for processing. Example: https://example.com, https://example.js */
    block_specific_requests?: string;
    /**
     * Comma-separated list of indexed CSS selectors to blur.
     * Format: `index:<selector>`, e.g., `0:.banner,1:#ads`.
     */
    blur_selector?: string;
    /**
     * Comma-separated list of indexed CSS selectors to blur.
     * Format: `index:<selector>`, e.g., `0:.banner,1:#ads`.
     */
    remove_selector?: string;
    /**
     * Specify a meaningful & unique file name to easily identify the screenshot result.
     * Avoid using spaces or special characters; use hyphens or underscores to separate words.
     */
    result_file_name?: string;
    /** **`Scrolling Screenshot`**: Capture a long scrolling screenshot. When true, disable `fullPage` and `freshScreenshot`. */
    scrolling_screenshot?: boolean;
    /** Speed of scrolling during the screenshot. */
    scroll_speed?: ApifreaksApi.ScreenshotCaptureRequestScrollSpeed;
    /** If true, the scroll will reverse back to the top after reaching the bottom. */
    scroll_back?: boolean;
    /** If true, the scrolling capture will start immediately upon page load. */
    start_immediately?: boolean;
    /** If true, multiple scrolling screenshots will be taken at different viewport sizes. */
    multiple_scrolling?: boolean;
    /** Comma-separated list of viewport sizes in the format index:XXw:YYh. Example: sizes=0:120w:300h,1:240w:500h */
    sizes?: string | string[];
    /** Duration in seconds for the scrolling capture. Acceptable range: 0 to 100 seconds. */
    duration?: number;
    fail_on_error?: boolean;
    longitude?: number;
    latitude?: number;
    proxy?: string;
    headers?: string;
    cookies?: string;
    scroll_to_element?: string;
    selector?: string;
    user_agent?: string;
    accept_languages?: string;
    custom_html?: string;
    image_quality?: number;
}
