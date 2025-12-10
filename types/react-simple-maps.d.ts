declare module 'react-simple-maps' {
  import { ComponentType, ReactNode } from 'react';

  export interface ProjectionConfig {
    scale?: number;
    center?: [number, number];
    rotate?: [number, number, number];
  }

  export interface ComposableMapProps {
    projectionConfig?: ProjectionConfig;
    className?: string;
    children?: ReactNode;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;

  export interface GeographiesProps {
    geography: string | object;
    children: (props: { geographies: any[] }) => ReactNode;
  }

  export const Geographies: ComponentType<GeographiesProps>;

  export interface GeographyProps {
    geography: any;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
    key?: string | number;
  }

  export const Geography: ComponentType<GeographyProps>;

  export interface MarkerProps {
    coordinates: [number, number];
    children?: ReactNode;
  }

  export const Marker: ComponentType<MarkerProps>;
}

