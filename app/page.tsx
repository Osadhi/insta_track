"use client";

import React, { useState } from "react";
import FileUploadForm from "../components/file-upload-form";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollBox } from "@/components/scroll-box";
import { Banner } from "@/components/banner";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Instructions } from "@/components/instructions";

interface FollowingInterface {
  relationships_following: [
    {
      title: string;
      media_list_data: [];
      string_list_data: [
        {
          href: string;
          value: string;
          timestamp: number;
        },
      ];
    },
  ];
}

const UploadPage: React.FC = () => {
  const [file1, setFile1] = useState<FileList | null>(null);
  const [file2, setFile2] = useState<FileList | null>(null);
  const [nonFollowers, setNonFollowers] = useState<any[]>([]);
  const [fans, setFans] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (
    files: FileList | null,
    setFile: React.Dispatch<React.SetStateAction<FileList | null>>,
  ) => {
    if (files) {
      setFile(files);
    }
  };

  const readFileAsJSON = (file: File): Promise<any> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const json = JSON.parse(reader.result as string);
          resolve(json);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => {
        reject(reader.error);
      };
      reader.readAsText(file);
    });
  };

  const handleCompare = async () => {
    try {
      if (!file1 || !file2) {
        setError("Please upload both files");
        return;
      }

      const following: FollowingInterface = await readFileAsJSON(file1[0]);
      const followers = await readFileAsJSON(file2[0]);

      const nonFollowersList: any[] = [];
      const fansList: any[] = [];

      following.relationships_following.forEach((entry1: any) => {
        const matchingEntry = followers.find(
          (entry2: any) =>
            entry1.string_list_data[0].value ===
            entry2.string_list_data[0].value,
        );
        if (!matchingEntry) {
          nonFollowersList.push({
            value: entry1.string_list_data[0].value,
            href: entry1.string_list_data[0].href,
          });
        }
      });

      followers.forEach((entry1: any) => {
        const matchingEntry = following.relationships_following.find(
          (entry2: any) =>
            entry1.string_list_data[0].value ===
            entry2.string_list_data[0].value,
        );
        if (!matchingEntry) {
          fansList.push({
            value: entry1.string_list_data[0].value,
            href: entry1.string_list_data[0].href,
          });
        }
      });

      setNonFollowers(nonFollowersList);
      setFans(fansList);
      setError(null);
    } catch (error) {
      setError(`An error occurred while comparing files ${error}`);
    }
  };

  return (
    <div className="space-y-8">
      <Banner />
      <section id="tracker">
        <h2 className="text-center lg:text-4xl text-3xl pt-6 pb-3">
          Start Tracking
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <Button
            asChild
            variant="ghost"
            className="group/inst hover:bg-background hover:text-white mb-3"
          >
            <Link href="#instructions">
              Read Instruction{"  "}
              <ChevronRight
                className="group-hover/inst:translate-x-1 ease-in-out duration-300"
                size={16}
              />
            </Link>
          </Button>
          <FileUploadForm
            onUpload={(files) => handleFileUpload(files, setFile1)}
            label="Following"
            required
          />
          <FileUploadForm
            onUpload={(files) => handleFileUpload(files, setFile2)}
            label="Followers"
            required
          />
          <Button onClick={handleCompare} className="flex-auto">
            Analyze
          </Button>
          {error && <div className="text-destructive ">{error}</div>}

          <Tabs
            defaultValue="nonfollowers"
            className="sm:w-[400px] w-full p-4 sm:p-0"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="nonfollowers">Non Followers</TabsTrigger>
              <TabsTrigger value="fans">Fans</TabsTrigger>
            </TabsList>
            <TabsContent value="nonfollowers">
              <ScrollBox list={nonFollowers} title="Non Followers" />
            </TabsContent>
            <TabsContent value="fans">
              <ScrollBox list={fans} title="Fans" />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <Instructions />
    </div>
  );
};

export default UploadPage;
