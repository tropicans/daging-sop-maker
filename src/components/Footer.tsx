export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3 font-poppins">SOPDaging</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Aplikasi profesional untuk generate dan mencetak SOP kementerian 
              dalam format PDF terstandarisasi.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Fitur Utama</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Upload Template SOP</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Generate PDF</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Manajemen User</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kelola Unit Kerja</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Dukungan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: admin@kementerian.go.id</li>
              <li>Telepon: (021) 123-4567</li>
              <li>Jam Kerja: 08:00 - 16:00 WIB</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Dibuat-buat oleh Yudhi. Semua hak dilindungi.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Aplikasi untuk keperluan administrasi SOP kementerian
          </p>
        </div>
      </div>
    </footer>
  );
};