import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function Instructions() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">How to Use Insta-Track</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Phase 1: Download Your Instagram Data</CardTitle>
          <CardDescription>
            Get your official follower data from Instagram
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                step: "Step 1",
                title: "Go to Instagram Settings",
                content:
                  "Open Instagram → Tap ☰ (menu) → Settings → Accounts Center",
              },
              {
                step: "Step 2",
                title: "Request Your Data",
                content:
                  'Tap "Your information and permissions" → "Download your information" → "Request a download"',
              },
              // Add all other steps similarly
            ].map((item) => (
              <AccordionItem key={item.step} value={item.step}>
                <AccordionTrigger>
                  <span className="font-medium mr-2">{item.step}:</span>
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Phase 2: Upload to Insta-Track</CardTitle>
          <CardDescription>Analyze your follower data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Step 6: Unzip the File</h3>
              <p className="text-sm text-muted-foreground">
                Locate the .zip file (check Downloads or email) and extract the
                JSON files.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Step 7: Upload JSON Files</h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
