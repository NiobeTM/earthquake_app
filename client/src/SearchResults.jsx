import { ResultCard } from "./ResultCard";

export const SearchResults = ({ documents }) => {
  if (!documents) return null;
  if (documents.length === 0)
    return (
      <p className="has-text-white is-size-5">
        No results found. Try broadening your search criteria.
      </p>
    );

  return (
    <div>
      <p className="has-text-white is-size-5 pb-3">
        {" "}
        Number of hits: {documents.length}
      </p>
      <div className="is-flex is-flex-wrap-wrap search-results-container">
        {documents.map((document, idx) => (
          <ResultCard key={idx} document={document} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
