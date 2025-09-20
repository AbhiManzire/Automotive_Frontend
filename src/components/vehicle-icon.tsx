import { CarFront, Bike, HelpCircle } from 'lucide-react';
import type { VehicleCategory } from '@/lib/types';

interface VehicleIconProps {
  category: VehicleCategory;
  className?: string;
}

export function VehicleIcon({ category, className }: VehicleIconProps) {
  switch (category) {
    case 'Car':
      return <CarFront className={className} />;
    case 'Bike':
      return <Bike className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
}
