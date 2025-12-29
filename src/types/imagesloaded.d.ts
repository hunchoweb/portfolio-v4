declare module "imagesloaded" {
  interface ImagesLoaded {
    on(event: "progress" | "done" | "fail" | "always", callback: () => void): void;
    images: Array<{ isLoaded: boolean }>;
  }

  function imagesLoaded(
    elem: Element | NodeList | string,
    options?: object,
    callback?: (instance: ImagesLoaded) => void
  ): ImagesLoaded;

  export = imagesLoaded;
}