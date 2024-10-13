import zod from "zod";

export const envSchema = zod.object({
  NEXT_PUBLIC_API_TMDB_KEY: zod.string(),
  NEXT_PUBLIC_API_ACESS_TOKEN: zod.string(),
  NEXT_PUBLIC_BASE_URL: zod.string(),
  NEXT_PUBLIC_IMAGE_ORIGINAL: zod.string(),
  NEXT_PUBLIC_IMAGE_W500: zod.string(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    "Invalid environment variables",
    parsedEnv.error.flatten().fieldErrors
  );
  throw new Error("Invalid environment variables");
}

export const env = parsedEnv.data;
