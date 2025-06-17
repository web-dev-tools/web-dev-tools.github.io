import { ImagePool } from '@squoosh/lib';

const imagePool = new ImagePool(1);

self.onmessage = async (event) => {
  const { fileBuffer, encoderType, encoderOptions } = event.data;

  const image = imagePool.ingestImage(fileBuffer);
  await image.encode({ [encoderType]: encoderOptions });

  const { binary } = image.encodedWith[encoderType];
  const blob = new Blob([binary], { type: `image/${encoderType}` });
  const blobUrl = URL.createObjectURL(blob);

  self.postMessage({ blobUrl });
};