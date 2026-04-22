import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-heading font-bold text-6xl text-gradient mb-4">404</h1>
        <p className="text-muted-foreground mb-6">Bu sayfa bulunamadı.</p>
        <Link to="/">
          <Button className="bg-primary text-primary-foreground font-heading font-semibold gap-2">
            <Home className="size-4" />
            Ana Sayfaya Dön
          </Button>
        </Link>
      </div>
    </div>
  );
}
