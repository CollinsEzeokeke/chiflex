import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";

const SearchPopUp: React.FC = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          {/* Visible search icon */}
          <Search />
        </DialogTrigger>
        <DialogContent className="h-[70vh] flex items-center">
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
            <DialogDescription>
              A prompt away from your dream Footwear
            </DialogDescription>
            hello world
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchPopUp;
