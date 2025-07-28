import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="text-muted-foreground">
              © 2025 Mahmoud Chebil. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and modern tech</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;