export interface BulkScreenshotCaptureResponse {
    status: string;
    meta_data: BulkScreenshotCaptureResponse.MetaData;
    results: BulkScreenshotCaptureResponse.Results.Item[];
}
export declare namespace BulkScreenshotCaptureResponse {
    interface MetaData {
        total_urls: number;
        successful_urls: number;
        failed_urls: number;
    }
    type Results = Results.Item[];
    namespace Results {
        interface Item {
            status: string;
            error_message?: string | undefined;
            url: Item.Url;
        }
        namespace Item {
            interface Url {
                screenshot: string;
                url: string;
                created_at: string;
                format: string;
                ttl: string;
                file_type?: string | undefined;
                extracted_html?: string | undefined;
                omit_background?: boolean | undefined;
                destroy_screenshot?: boolean | undefined;
                fail_on_error?: boolean | undefined;
                longitude?: number | undefined;
                latitude?: number | undefined;
                proxy?: string | undefined;
                no_cookie_banners?: boolean | undefined;
                block_ads?: boolean | undefined;
                headers?: string | undefined;
                cookies?: string | undefined;
                scroll_to_element?: string | undefined;
                selector?: string | undefined;
                blur_selector?: string | undefined;
                remove_selector?: string | undefined;
                css?: string | undefined;
                css_url?: string | undefined;
                js?: string | undefined;
                js_url?: string | undefined;
                user_agent?: string | undefined;
                accept_languages?: string | undefined;
                delay?: number | undefined;
                thumbnail_width?: number | undefined;
                output?: string | undefined;
                fresh?: boolean | undefined;
                enable_caching?: boolean | undefined;
                lazy_load?: boolean | undefined;
                full_page?: boolean | undefined;
                retina?: boolean | undefined;
                height?: number | undefined;
                width?: number | undefined;
                custom_html?: string | undefined;
                block_chat_widgets?: boolean | undefined;
                block_js?: boolean | undefined;
                block_stylesheets?: boolean | undefined;
                block_images?: boolean | undefined;
                block_media?: boolean | undefined;
                block_font?: boolean | undefined;
                block_text_track?: boolean | undefined;
                block_xhr?: boolean | undefined;
                block_fetch?: boolean | undefined;
                block_event_source?: boolean | undefined;
                block_web_socket?: boolean | undefined;
                block_manifest?: boolean | undefined;
                block_specific_requests?: string | undefined;
                adjust_top?: number | undefined;
                image_quality?: number | undefined;
                extract_html?: boolean | undefined;
                extract_text?: boolean | undefined;
                dark_mode?: boolean | undefined;
                block_tracking?: boolean | undefined;
                wait_for_event?: string | undefined;
                grayscale?: number | undefined;
                result_file_name?: string | undefined;
                enable_incognito?: boolean | undefined;
                timeout?: number | undefined;
                scrolling_screenshot?: boolean | undefined;
                multiple_scrolling?: boolean | undefined;
                scroll_speed?: string | undefined;
                duration?: number | undefined;
                scroll_back?: boolean | undefined;
                start_immediately?: boolean | undefined;
                clip?: Record<string, unknown> | undefined;
                sizes?: Record<string, unknown>[] | undefined;
                /** Accepts any additional properties */
                [key: string]: any;
            }
        }
    }
}
