import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import TypographyP from "./ui/TypographyP";
import StatusCheck from "./StatusCheck";

type Props = {
  title: string;
  description: string;
};

export default function CardContainer({ title, description }: Props) {
  return (
    <Card className="w-[350px] p-2">
      <CardHeader>
        <TypographyP
          textContent="Date"
          style="leading-7 [&:not(:first-child)]:mt-6"
        />
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <TypographyP
              textContent={title}
              style="leading-7 [&:not(:first-child)]:mt-6"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <TypographyP
              textContent={description}
              style="leading-7 [&:not(:first-child)]:mt-6"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <StatusCheck />
        <Button variant="destructive">Delete task</Button>
      </CardFooter>
    </Card>
  );
}
