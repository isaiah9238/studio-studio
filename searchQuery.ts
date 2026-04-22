if (!searchQuery.trim()) {
      setError('Please enter a search query.');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${searchQuery}&start=${startIndex}`);
      if (!response.ok) throw new Error('Search failed');
      const data = await response.json();
      setSearchResults(data.items || []);
    } catch (err) {
      setError('An error occurred while fetching results.');
    } finally {
      setIsLoading(false);
    }
  };
```
### Pagination Handlers
```typescript
  const handleNextPage = () => {
    setStartIndex(prev => prev + 10);
    handleSearch();
  };
  const handlePrevPage = () => {
    setStartIndex(prev => Math.max(1, prev - 10));
    handleSearch();
  };
```
### JSX
```typescript
  return (
    <div className="search-container">
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search the internet..."
      />
      <button onClick={() => { setStartIndex(1); handleSearch(); }} disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
      </button>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <ul>
        {searchResults.map((result) => (
          <li key={result.link}>
            <a href={result.link} target="_blank" rel="noopener noreferrer">{result.title}</a>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={startIndex === 1 || isLoading}>Previous</button>
        <button onClick={handleNextPage} disabled={isLoading || searchResults.length < 10}>Next</button>
      </div>
    </div>
  );
};
```
### Export Component
```typescript
export default AiSearch;
```

