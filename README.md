# Node JS bindings to Rust aho-corasick automata crate
Rust crate [Aho-Corasick](https://github.com/BurntSushi/aho-corasick)
This project uses [NAPI-RS](https://napi.rs/)](https://napi.rs/) and build for [Terraphim AI](https://terraphim.ai/). Currently two functions are exposed: findMatched and replaceAllStream, see index.d.ts for signatures. 
findMatched is using MatchKind::LeftmostLongest. 

