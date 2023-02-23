import { Response } from '../utils/interfaces';

export interface SearchResultViewProps {
  data: Response[];
}

export const SearchResultView = ({data}: SearchResultViewProps) => {
  const {
    word,
    phonetic,
    phonetics,
    meanings,
    sourceUrls
  } = data[0];
  const { audio } = phonetics[0];  

  return (
    <article>
      <header>
        <h2>{ word }</h2>
        <p data-testid="phonetics">{phonetic}</p>

        <div data-testid="audio-file">
          <audio src={audio}></audio>
        </div>
      </header>

      {/* FIXME: Should be splitted in other component? */}

      {
        meanings.map(({partOfSpeech, definitions, synonyms}) => (
          <section key={partOfSpeech}>
            <h3>{partOfSpeech}</h3>
            <h4>Meaning</h4>
            <ul>
              {
                definitions.map(({definition, example}) => (
                  <li key={definition}>
                    {definition}
                    {example && <blockquote>{example}</blockquote>}
                  </li>
                ))
              }
            </ul>
            {
              synonyms.length > 0 && (
                <>
                  <h4>Synonyms</h4>
                  <ul>
                    {
                      synonyms.map(synonym => (
                        <li key={synonym}>
                          {synonym}
                        </li>
                      ))
                    }
                  </ul>
                </>
              )
            }
          </section>
        ))
      }

      <hr />

      <section>
        <h3>Source</h3>
        <p>
          {/* TODO: Add icon */}
          {/* TODO: Check if there could be more than one source */}
          <a href={sourceUrls[0]}>
            {sourceUrls[0]}
          </a>
        </p>
      </section>
    </article>
  );
};
