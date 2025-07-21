import { Button } from "@/components/ui/button";
import { FileText, Menu, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b bg-background shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary font-poppins">SOPDaging</h1>
            </div>
            <span className="hidden md:block text-sm text-muted-foreground border-l pl-3 ml-3">
              Aplikasi Generate SOP PDF
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Dashboard
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Template SOP
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Kelola User
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Unit Kerja
            </a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              className="hidden md:flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
            >
              <User className="h-4 w-4" />
              <span>Admin</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="md:hidden hover:scale-105 transition-transform duration-200"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};