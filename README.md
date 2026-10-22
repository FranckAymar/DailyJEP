# JEP of the Day

One [JEP](https://openjdk.org/jeps/0) (JDK Enhancement Proposal) per day, with a short summary and a link to read the full text.

**Live app: <https://dailyjep-production.up.railway.app/>**

The JEP of the day is picked from the list at the bottom of this file, by date. Everyone sees the same JEP on the same day.

## Contributing

Contributions are welcome. The easiest way to help is to **add a JEP** to the list.

1. Fork [FranckAymar/DailyJEP](https://github.com/FranckAymar/DailyJEP) and create a branch.
2. Add a section at the **end of this file**, in exactly this form:

   ```
   ### 444 | Virtual Threads
   One-paragraph summary.
   ```

   - The number and title must match the JEP on [openjdk.org/jeps](https://openjdk.org/jeps/0).
   - Use the JEP's own **Summary** section, or a short faithful paraphrase of it. Keep it to one paragraph.
   - Don't add a JEP that is already in the list.
   - The link `https://openjdk.org/jeps/<number>` is generated automatically.
3. Check it locally (see below), then open a pull request.

Bug fixes and improvements to the page or server are welcome too. Please keep the project dependency-free (plain HTML, CSS and Node) unless there is a good reason. For bigger changes, open an issue first.

> Note: the page parses this file, so don't start a line with `### <number> |` anywhere except for a real JEP entry (examples in code blocks are ignored).

## Run it locally

You need [Node.js](https://nodejs.org/) 26.12.1 or later. There is nothing to install.

```
npm start
```

Then open <http://localhost:3000>. Set `PORT` to change it, e.g. `PORT=8080 npm start`. The server reads this file on every request, so edits show up on refresh.

## Project structure

```
public/index.html   the page
public/style.css    its styles
server.js           tiny Node server (no dependencies)
README.md           documentation and the JEP list
```

## JEPs

### 286 | Local-Variable Type Inference
Enhance the Java Language to extend type inference to declarations of local variables with initializers.

### 269 | Convenience Factory Methods for Collections
Define library APIs to make it convenient to create instances of collections and maps with small numbers of elements, so as to ease the pain of not having collection literals in the Java programming language.

### 361 | Switch Expressions
Extend switch so it can be used as either a statement or an expression, and so that both forms can use either traditional case ... : labels (with fall through) or new case ... -> labels (with no fall through), with a further new statement for yielding a value from a switch expression. These changes will simplify everyday coding, and prepare the way for the use of pattern matching in switch. This was a preview language feature in JDK 12 and JDK 13.

### 378 | Text Blocks
Add text blocks to the Java language. A text block is a multi-line string literal that avoids the need for most escape sequences, automatically formats the string in a predictable way, and gives the developer control over the format when desired.

### 395 | Records
Enhance the Java programming language with records, which are classes that act as transparent carriers for immutable data. Records can be thought of as nominal tuples.

### 409 | Sealed Classes
Enhance the Java programming language with sealed classes and interfaces. Sealed classes and interfaces restrict which other classes or interfaces may extend or implement them.

### 440 | Record Patterns
Enhance the Java programming language with record patterns to deconstruct record values. Record patterns and type patterns can be nested to enable a powerful, declarative, and composable form of data navigation and processing.

### 441 | Pattern Matching for switch
Enhance the Java programming language with pattern matching for switch expressions and statements. Extending pattern matching to switch allows an expression to be tested against a number of patterns, each with a specific action, so that complex data-oriented queries can be expressed concisely and safely.

### 444 | Virtual Threads
Introduce virtual threads to the Java Platform. Virtual threads are lightweight threads that dramatically reduce the effort of writing, maintaining, and observing high-throughput concurrent applications.

### 454 | Foreign Function & Memory API
Introduce an API by which Java programs can interoperate with code and data outside of the Java runtime. By efficiently invoking foreign functions (i.e., code outside the JVM), and by safely accessing foreign memory (i.e., memory not managed by the JVM), the API enables Java programs to call native libraries and process native data without the brittleness and danger of JNI.

### 456 | Unnamed Variables & Patterns
Enhance the Java programming language with unnamed variables and unnamed patterns, which can be used when variable declarations or nested patterns are required but never used. Both are denoted by the underscore character, _.

### 485 | Stream Gatherers
Enhance the Stream API to support custom intermediate operations. This will allow stream pipelines to transform data in ways that are not easily achievable with the existing built-in intermediate operations.

### 491 | Synchronize Virtual Threads without Pinning
Improve the scalability of Java code that uses synchronized methods and statements by arranging for virtual threads that block in such constructs to release their underlying platform threads for use by other virtual threads. This will eliminate nearly all cases of virtual threads being pinned to platform threads, which severely restricts the number of virtual threads available to handle an application's workload.

### 513 | Flexible Constructor Bodies
In the body of a constructor, allow statements to appear before an explicit constructor invocation, i.e., super(...) or this(...). Such statements cannot reference the object under construction, but they can initialize its fields and perform other safe computations. This change allows many constructors to be expressed more naturally. It also allows fields to be initialized before they become visible to other code in the class, such as methods called from a superclass constructor, thereby improving safety.
