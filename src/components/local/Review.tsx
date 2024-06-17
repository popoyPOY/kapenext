import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import MyMap from "./MyMap" 
import ProfileReview from "./ProfileReview"
import { ScrollArea } from "@/components/ui/scroll-area"
import WriteReview from "./WriteReview"


export default function Review({items}: any) {
    return (
        <Card className="w-98">
        <CardHeader>
            <CardTitle>{items.shop_name}</CardTitle>
            <CardDescription>{items.description}</CardDescription>
        </CardHeader>
        <CardContent>
            <MyMap lat={items.lat} long={items.long} />
        </CardContent>
        <CardFooter className="justify-center flex-col">
            {/** Scroll Area */}
            <ScrollArea className="h-60 w-96">
                <ProfileReview id={items.shop_id}/>
            </ScrollArea>

            <p>Write a Review</p>
            {/** Write Review */}

            <WriteReview shop_name={items.shop_name} shop_id={items.shop_id} />

        </CardFooter>
    </Card>
    )
}