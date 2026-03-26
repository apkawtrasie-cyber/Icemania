import { notFound } from "next/navigation";
import { MENU_ITEMS, getMenuItemById } from "@/config/site-data";
import ProductDetail from "@/components/menu/ProductDetail";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return MENU_ITEMS.map((item) => ({ id: String(item.id) }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const item = getMenuItemById(Number(id));

  if (!item) {
    notFound();
  }

  return <ProductDetail item={item} />;
}
