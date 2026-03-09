import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function CardImage({ recipe }) {
  const { image, title, category, description, id } = recipe;

  return (
    <Card className="relative mx-auto w-full h-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={image}
        alt={title}
        className="relative  aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary" className={"bg-zinc-300"}>
            {category}
          </Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription className={"text-gray-900"}>
          {description.slice(0, 30)}...{" "}
          <small className="text-blue-900">more</small>
        </CardDescription>
      </CardHeader>
      <CardFooter className={"bg-zinc-300"}>
        <Button className="w-full cursor-pointer">
          <Link to={`/recipes/details/${id}`}>View Recipe</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
