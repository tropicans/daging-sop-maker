import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Upload, Download, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Content */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-poppins">
            Generate SOP PDF
            <span className="block text-secondary mt-2">dengan Mudah</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Aplikasi profesional untuk staf administrasi kementerian dalam membuat dan mencetak 
            Standard Operating Procedure (SOP) dalam format PDF yang terstandarisasi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="hover:scale-105 transition-transform duration-200 shadow-md"
            >
              <FileText className="mr-2 h-5 w-5" />
              Mulai Buat SOP
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:scale-105 transition-transform duration-200"
            >
              <Upload className="mr-2 h-5 w-5" />
              Upload Template
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 animate-scale-in">
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">Upload Template</h3>
              <p className="text-muted-foreground">
                Upload template SOP yang telah terstandarisasi sesuai format kementerian
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">Isi Data Kegiatan</h3>
              <p className="text-muted-foreground">
                Lengkapi data kegiatan, pelaksana, dan detail SOP dengan form yang mudah
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">Generate PDF</h3>
              <p className="text-muted-foreground">
                Preview dan download SOP dalam format PDF siap cetak dengan watermark resmi
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};