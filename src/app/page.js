// src/app/page.js
import ComingSoon from '@/components/sections/ComingSoon';

export const metadata = {
  title: 'Adare Collection - Exclusive Properties Coming Soon',
  description: 'An exclusive portfolio of exceptional properties being carefully assembled. Each residence is selected for its unique character, impeccable design, and unparalleled location.',
};

export default function HomePage() {
  return (
    <ComingSoon />
  );
}