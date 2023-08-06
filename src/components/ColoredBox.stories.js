import React from 'react';
import Background from './Background';
import GradientBox from '../components/GradientBox';


export default {
  title: 'Example/Color',
  component: Background,
};

export const Bg = () => (
  <div style={{ display: 'flex' }}>
    <Background color1="#FFFFFF"/>
    <Background color1="#FCFEFF"/>
    <Background color1="#D5D5DC"/>
    <Background color1="#16162D"/>
    <Background color1="#1F1F35"/>
  </div>
);

export const BnW = () => (
  <div style={{ display: 'flex' }}>
    <Background color1="#000000"/>
    <Background color1="#FFFFFF"/>
  </div>
);

export const Gray = () => (
  <div style={{ display: 'flex' }}>
    <Background color1="#F9FAFB"/>
    <Background color1="#F3F4F6"/>
    <Background color1="#E5E7EB"/>
    <Background color1="#D1D5DB"/>
    <Background color1="#9CA3AF"/>
    <Background color1="#6B7280"/>
    <Background color1="#4B5563"/>
    <Background color1="#374151"/>
    <Background color1="#1F2937"/>
    <Background color1="#111827"/>
  </div>
);
export const Warning = () => (
  <div style={{ display: 'flex' }}>
    <Background color1="#FFFBEB"/>
    <Background color1="#FEF3C7"/>
    <Background color1="#FDE68A"/>
    <Background color1="#FCD34D"/>
    <Background color1="#FBBF24"/>
    <Background color1="#F59E0B"/>
    <Background color1="#D97706"/>
    <Background color1="#B45309"/>
    <Background color1="#92400E"/>
    <Background color1="#78350F"/>
  </div>
);
export const Success = () => (
  <div style={{ display: 'flex' }}>
    <Background color1="#ECFDF5"/>
    <Background color1="#D1FAE5"/>
    <Background color1="#A7F3D0"/>
    <Background color1="#6EE7B7"/>
    <Background color1="#34D399"/>
    <Background color1="#10B981"/>
    <Background color1="#059669"/>
    <Background color1="#047857"/>
    <Background color1="#065F46"/>
    <Background color1="#064E3B"/>
  </div>
);
export const Error = () => (
  <div style={{ display: 'flex' }}>
    <Background color1="#FEF2F2"/>
    <Background color1="#FEE2E2"/>
    <Background color1="#FECACA"/>
    <Background color1="#FCA5A5"/>
    <Background color1="#F87171"/>
    <Background color1="#EF4444"/>
    <Background color1="#DC2626"/>
    <Background color1="#B91C1C"/>
    <Background color1="#991B1B"/>
    <Background color1="#7F1D1D"/>
  </div>
);
export const Green = () => (
  <div style={{ display: 'flex' }}>
    <Background color1="#CFDBD8"/>
    <Background color1="#9EB7B2"/>
    <Background color1="#6E928B"/>
    <Background color1="#3D6E65"/>
    <Background color1="#0D4A3E"/>
    <Background color1="#0C4338"/>
    <Background color1="#09342B"/>
    <Background color1="#07251F"/>
    <Background color1="#041613"/>
    <Background color1="#010706"/>
  </div>
);
export const Orange = () => (
  <div style={{ display: 'flex' }}>
    <Background color1="#FFEED3"/>
    <Background color1="#FFDCA7"/>
    <Background color1="#FFCB7C"/>
    <Background color1="#FFB950"/>
    <Background color1="#FFA824"/>
    <Background color1="#E69720"/>
    <Background color1="#B37619"/>
    <Background color1="#805412"/>
    <Background color1="#4C320B"/>
    <Background color1="#191104"/>
  </div>
);
export const Gradient = () => (
  <div style={{ display: 'flex' }}>
    <GradientBox colors={['#FFFFFF00', '#00000033']} />
  </div>
);
