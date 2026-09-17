import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import type { Product } from "@/data/products";

const IMAGE_DIR = "/products/";
const IMAGE_EXTENSIONS = [".webp", ".jpg", ".jpeg", ".png", ".avif", ".gif"];

function findImageError(image: string): string | null {
  if (!image.startsWith(IMAGE_DIR)) {
    return `image는 "${IMAGE_DIR}파일명" 형태여야 합니다. (외부 이미지 URL은 사용할 수 없습니다)`;
  }

  const relativePath = image.slice(1);
  if (!IMAGE_EXTENSIONS.some((ext) => relativePath.toLowerCase().endsWith(ext))) {
    return `지원하지 않는 이미지 형식입니다. (${IMAGE_EXTENSIONS.join(", ")})`;
  }

  const fullPath = join(process.cwd(), "public", relativePath);
  const segments = relativePath.split("/");
  const fileName = segments.pop()!;
  const dirPath = join(process.cwd(), "public", ...segments);

  // Vercel은 대소문자를 구분하므로 파일명이 정확히 일치하는지 확인한다.
  if (!existsSync(fullPath) || !readdirSync(dirPath).includes(fileName)) {
    return `public${image} 파일이 없습니다. (파일명·대소문자·확장자를 확인하세요)`;
  }

  return null;
}

function findUrlError(url: string): string | null {
  if (url.trim() !== url) {
    return "url 앞뒤에 공백이 있습니다.";
  }

  try {
    const { protocol } = new URL(url);
    if (protocol !== "https:" && protocol !== "http:") {
      return "url은 https:// 로 시작해야 합니다.";
    }
  } catch {
    return "url은 https:// 로 시작하는 전체 주소여야 합니다.";
  }

  return null;
}

export function validateProducts(products: Product[]) {
  const errors: string[] = [];

  products.forEach((product, index) => {
    const label = `${String(index + 1).padStart(2, "0")}번 상품 "${product.name}"`;
    const problems = [
      product.name?.trim() ? null : "name이 비어 있습니다.",
      findImageError(product.image ?? ""),
      findUrlError(product.url ?? ""),
    ].filter((problem): problem is string => problem !== null);

    problems.forEach((problem) => errors.push(`- ${label}: ${problem}`));
  });

  if (errors.length > 0) {
    throw new Error(
      `data/products.ts 상품 데이터 오류 ${errors.length}건\n${errors.join("\n")}`,
    );
  }
}
