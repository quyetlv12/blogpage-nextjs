import Dichvukhovan from '@/components/services/dichvukhovan';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dịch vụ Kho vận | DGN Logistics",
  description: "Dịch vụ Kho vận của DGN Logistics",
};

const ServiceDGPOST = () => {
  
  return (
    <Dichvukhovan />
  )
}

export default ServiceDGPOST