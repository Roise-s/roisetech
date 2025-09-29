import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"


export function DialogTwo() {
    const [result, setResult] = useState("Send Message");
    const accessKey = import.meta.env.VITE_ACCESS_KEY;

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        const form = event.currentTarget as HTMLFormElement;

        setResult("Sending...");

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", accessKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
            });

            const data: { success: boolean; message: string } = await response.json();

            if (data.success) {
            setResult("Form Submitted Successfully");
            form.reset();
            } else {
            console.error("Error", data);
            setResult(data.message);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setResult("Something went wrong. Please try again.");
        }
    };


  return (
    <Dialog>
        <DialogTrigger asChild>
          <button className="inline-flex items-center cursor-pointer justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-gray-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-900">
            Get repairs
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Get in Touch With Me</DialogTitle>
            <DialogDescription>
                Have a laptop issue? Send me the details and we'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Full Name</Label>
              <Input id="name-1" name="Full Name" placeholder="Sarah Johnson" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Email Address</Label>
              <Input id="username-1" name="Email Address" placeholder="sarah@email.com" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Phone Number</Label>
              <Input id="username-1" name="Phone Number" placeholder="e.g. +27 710 502 8649" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Device Type / Model</Label>
              <Input id="username-1" name="Device Type" placeholder="e.g. MacBook Pro 13-inch 2020" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Problem Description</Label>
              <Textarea id="username-1" className="mb-1.5" name="Problem Description" placeholder="Describe the issue with your laptop (be as detailed as possible)" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">{result}</Button>
          </DialogFooter>
          </form>
        </DialogContent>
    </Dialog>
  )
}
