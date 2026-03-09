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
import { NavLink } from "react-router-dom";

export default function CardImage({ recipe }) {
    console.log('card =', recipe)
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 ">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={recipe.image}
        alt={recipe.title}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary" className={"bg-zinc-300"}>
            {recipe.category}
          </Badge>
        </CardAction>
        <CardTitle>{recipe.title}</CardTitle>
        <CardDescription className={"text-gray-900"}>
          {recipe.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className={"bg-zinc-300"}>
        <Button className="w-full cursor-pointer">
            <NavLink to='/'>
                View Recipe
            </NavLink>
        </Button>
      </CardFooter>
    </Card>
  );
}
