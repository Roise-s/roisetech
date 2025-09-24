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


export function DialogDemo() {
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
          <button className="group cursor-pointer inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-nowrap text-neutral-800 rounded-full focus:outline-hidden">Get a quote</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Get in Touch</DialogTitle>
            <DialogDescription>
                Let’s bring your ideas to life, drop me a message and I’ll get back to you as soon as I can!
            </DialogDescription>
          </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Your Name</Label>
              <Input id="name-1" name="name" placeholder="Sarah Johnson" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Your Email</Label>
              <Input id="username-1" name="email" placeholder="sarah@email.com" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Business / Brand Name</Label>
              <Input id="username-1" name="business name" placeholder="e.g. Johnson’s Bakery" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Message</Label>
              <Textarea id="username-1" name="message" placeholder="Tell me a little about what you’re looking for..." />
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
