import { createApi } from "unsplash-js";

export default async function handler(req, res) {
  const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
  });

  // const data = await unsplash.photos.get({ photoId: "eOLpJytrbsQ" });
  const data = await unsplash.photos.getRandom({
    query: "wallpapers-4k",
    orientation: "landscape",
  });
  // const data = await unsplash.photos.get({ photoId: "kRagSBKt3II" });
  console.log({ data });

  res.status(200).json({ imageUrl: data.response.urls.full });
  // res.status(200).json({ data });
}
