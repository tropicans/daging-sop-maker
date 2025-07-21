import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Users, Building2, Download, Plus } from "lucide-react";

export const Dashboard = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2 font-poppins">Dashboard</h2>
          <p className="text-muted-foreground">Kelola SOP dan template dengan mudah</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total SOP</p>
                  <p className="text-2xl font-bold text-primary">42</p>
                </div>
                <FileText className="h-8 w-8 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Template</p>
                  <p className="text-2xl font-bold text-primary">8</p>
                </div>
                <Upload className="h-8 w-8 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">User Aktif</p>
                  <p className="text-2xl font-bold text-primary">15</p>
                </div>
                <Users className="h-8 w-8 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Unit Kerja</p>
                  <p className="text-2xl font-bold text-primary">6</p>
                </div>
                <Building2 className="h-8 w-8 text-primary/60" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 font-poppins">
                <Plus className="h-5 w-5" />
                <span>Quick Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                className="w-full justify-start hover:scale-105 transition-transform duration-200" 
                variant="outline"
              >
                <FileText className="mr-2 h-4 w-4" />
                Buat SOP Baru
              </Button>
              <Button 
                className="w-full justify-start hover:scale-105 transition-transform duration-200" 
                variant="outline"
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload Template
              </Button>
              <Button 
                className="w-full justify-start hover:scale-105 transition-transform duration-200" 
                variant="outline"
              >
                <Users className="mr-2 h-4 w-4" />
                Kelola User
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="font-poppins">Aktivitas Terbaru</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 pb-3 border-b">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">SOP Pengadaan Barang dibuat</p>
                    <p className="text-xs text-muted-foreground">2 jam yang lalu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 pb-3 border-b">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Template Surat Keputusan diupload</p>
                    <p className="text-xs text-muted-foreground">5 jam yang lalu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">User baru ditambahkan</p>
                    <p className="text-xs text-muted-foreground">1 hari yang lalu</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};