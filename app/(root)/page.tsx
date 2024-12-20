import SearchForm from "@/app/component/SearchForm";

export default function Home() {
    return (
        <>
            <section className={'pink_container'}>
                <h1 className={'heading'}>Pitch Your startup, <br/> Connect with Entreprenneurs</h1>

                <p className={'sub-heading !max-w-3xl'}>
                    Submit Ideas, Vote on Pitches, and get Noticed in Virtual Competitions.
                </p>

                <SearchForm />
            </section>
        </>
  );
}
