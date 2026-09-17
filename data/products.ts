export type Product = {
  name: string;
  /** 상품명 안에서 강조할 단어 (상품명에 그대로 들어 있어야 함) */
  highlight?: string;
  image: string;
  url: string;
  /** 판매가 (취소선 표시) */
  originalPrice?: number;
  /** 링크 할인가 — 할인율은 판매가와 비교해 자동 계산 */
  salePrice?: number;
};

export const products: Product[] = [
  {
    name: "‘여행필수품’ 일회용 열압착 소분파우치 (강추)",
    highlight: "강추",
    image: "/products/product1.png",
    url: "https://link.coupang.com/a/g0sOdGfJ1M",
    originalPrice: 20000,
    salePrice: 9900,
  },
  {
    name: "99.9% UV 살균 침구청소기",
    highlight: "99.9%",
    image: "/products/product2.png",
    url: "https://naver.me/Fz8ne400",
    originalPrice: 189000,
    salePrice: 99000,
  },
  {
    name: "파워스핀 무선 욕실청소기",
    highlight: "파워스핀",
    image: "/products/product3.jpeg",
    url: "https://naver.me/GXFJruE9",
    originalPrice: 99000,
    salePrice: 64800,
  },
  {
    name: "2 in 1 멀티 살균 스팀청소기",
    highlight: "2 in 1",
    image: "/products/product4.png",
    url: "https://naver.me/FbVL4ADN",
    originalPrice: 189000,
    salePrice: 99000,
  },
];
