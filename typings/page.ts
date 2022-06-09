import { SEOProps } from '@/components/SEO';

export interface PageProps {
  title: string;
  seo: SEOProps;
}

export type fallback = { [key: string]: any };
