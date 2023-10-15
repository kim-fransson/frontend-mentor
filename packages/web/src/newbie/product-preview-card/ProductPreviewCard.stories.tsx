import type { Meta, StoryObj } from "@storybook/react";
import { ProductPreviewCard } from "./ProductPreviewCard";

const meta: Meta<typeof ProductPreviewCard> = {
  component: ProductPreviewCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#f0f0f0" }],
    },
  },
  args: {
    product: {
      category: "perfume",
      title: "gabrielle essence eau de parfum",
      description:
        "A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.",
      currentPrice: 149.99,
      oldPrice: 169.99,
      image: {
        mobile: "images/product-preview-card/image-product-mobile.jpg",
        desktop: "images/product-preview-card/image-product-desktop.jpg",
        alt: "a bottle of gabrielle essence eau de parfum by chanel",
      },
    },
  },
  argTypes: {
    onAddToCart: {
      actions: "add to cart",
    },
  },
};
export default meta;

type Story = StoryObj<typeof ProductPreviewCard>;

export const Basic: Story = {
  args: {},
};
