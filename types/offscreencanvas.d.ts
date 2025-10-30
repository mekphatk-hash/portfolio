interface OffscreenCanvas extends EventTarget {
  width: number;
  height: number;
  getContext(contextId: "2d"): OffscreenCanvasRenderingContext2D | null;
  getContext(contextId: "webgl"): WebGLRenderingContext | null;
  getContext(contextId: "webgl2"): WebGL2RenderingContext | null;
  convertToBlob(options?: ImageEncodeOptions): Promise<Blob>;
  transferToImageBitmap(): ImageBitmap;
}
