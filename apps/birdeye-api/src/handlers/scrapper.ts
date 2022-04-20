import { prepareHandler, ServerlessEvent } from "@birdeye-api/birdeye-serverless-gql-handler";

export const handler =  prepareHandler(async (event:ServerlessEvent) => {
    console.log(event.body)
    const reviews = [{
      reviewDate:"hey",
      rating:"sup",
      reviewerName:"cool",
      reviewComment:"sleep"
    },{
        reviewDate:"hey",
        rating:"sup",
        reviewerName:"cool",
        reviewComment:"sleep"
      },]
    return {reviews, ok:true, message:" success"}
})