
import { ReactElement } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

interface RankingCardProps {
  title: string,
  desc: string,
  content: ReactElement
}

export default function RankingCard({title, desc, content}: RankingCardProps) {
  return (
    <Card>
      <CardHeader className="items-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
    </Card>
  )
}