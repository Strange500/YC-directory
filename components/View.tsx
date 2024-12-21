import Ping from "@/components/ping";
import {STARTUP_VIEWS_QUERY} from "@/sanity/lib/queries";
import {client} from "@/sanity/lib/client";

const View = async ({id}: { id: string }) => {
    const {views} = await client
        .withConfig({useCdn: false})
        .fetch(STARTUP_VIEWS_QUERY, {id});

    return (
        <div className={'view-container'}>
            <div className={'absolute -top-2 -right-2'}>
                <Ping/>
            </div>

            <p className={'view-text'}>
                <span className={'font-black'}>{views} Views</span>
            </p>

        </div>
    )
}

export default View