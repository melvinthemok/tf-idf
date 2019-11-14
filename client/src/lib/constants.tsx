type CONTENT_PART = {
  __html: string
}

const CONTENT: CONTENT_PART[] = [
  {
    __html: `
      <h2>Term frequency</h2>
      <p>How would you start if you were asked to compare the similarity between two documents?</p>
      <p>You might first reduce each document to a mapping of its individual words to their respective counts in the document. A document can be seen as a string e.g. "the quick brown fox jumps over the lazy dog", which could be represented as:</p>
      <code>
{
  "the": 2,
  "quick": 1,
  "brown": 1,
  "fox": 1,
  "jumps": 1,
  "over": 1,
  "lazy": 1,
  "dog": 1
}
      </code>
      <p>In your first task, you will write a function in Python 3 that takes a string and returns a word count <code>dict</code>, otherwise known as a document's <strong>term frequencies</strong>.</p>
      <p>Have fun coding!</p>
    `
  }, {
    __html: `
      <h2>Normalized term frequency</h2>
      <p>Is there a more accurate way to represent documents other than using only their term frequencies?</p>
      <p>You could <strong>normalize the term frequencies</strong> of a document by dividing each count by the maximum count. Taking the previous word count as an example:</p>
      <code>
{
  "the": 2,
  "quick": 1,
  "brown": 1,
  "fox": 1,
  "jumps": 1,
  "over": 1,
  "lazy": 1,
  "dog": 1
}
      </code>
      <p><code>"the"</code> appears the most frequently (twice), so you could normalize the term frequencies by dividing each count by 2, so that we get:</p>
      <code>  
{
  "the": 1,
  "quick": 0.5,
  "brown": 0.5,
  "fox": 0.5,
  "jumps": 0.5,
  "over": 0.5,
  "lazy": 0.5,
  "dog": 0.5
}
      </code>
      <p>For this task, you will be extending the <code>word_count</code> function seen earlier, by dividing each count by the maximum count.</p>
      <p>Best of luck!</p>
    `
  }, {
    __html: `
      <h2>Inverse document frequency</h2>
      <p>How do we take into account the relative frequency of a term amongst several (million) documents?</p>
      <p>Now that we have learnt about term frequency, it's time to be introduced to <strong>inverse document frequency</strong>.</p>
      <p>The basic idea of inverse document frequency is to compute a value representing the uniqueness of a word appearing amongst a number of documents.</p>
      <p>For example, you might have the following 2 documents:</p>
      <code>"the quick brown fox jumps over the lazy dog"</code>
      <p>and</p>
      <code>"the slow brown fox jumps over the diligent dog"</code>
      <p>We begin by counting the number of documents in which each word appears:</p>
      <code>
{
  "the": 2,
  "quick": 1,
  "brown": 2,
  "fox": 2,
  "jumps": 2,
  "over": 2,
  "lazy": 1,
  "dog": 2,
  "slow": 1,
  "diligent": 1
}
      </code>
      <p>If a word appears in many of the documents, it can be said to be less unique.</p>
      <p>We compute the inverse document frequency of a term as:</p>
      <code>  
log(N/n) where:
(1) N denotes the total number of documents
(2) n denotes the number of documents in which the term appears
      </code>
      <p>In this example, the inverse document frequencies would thus be as follows:</p>
      <code>
{
  "the": 0.0,
  "quick": 0.69314718056,
  "brown": 0.0,
  "fox": 0.0,
  "jumps": 0.0,
  "over": 0.0,
  "lazy": 0.69314718056,
  "dog": 0.0,
  "slow": 0.69314718056,
  "diligent": 0.69314718056
}
      </code>
    `
  }, {
    __html: `
      <h2>Applying TF-IDF</h2>
      <p>How do we apply TF-IDF to measure the similarity of documents?</p>
      <p>Now that we have learnt about term frequency and inverse document frequency, we will finally learn about applying these values to measure the similarity of documents to a particular document or query.</p>
      <p>Recall that <strong>term frequency</strong> simply refers to the count of terms for each document, and that <strong>inverse document frequency</strong> represents the uniqueness of a term amongst a number of documents.</p>
      <p>We can combine these concepts with a method of comparing vectors, <strong>cosine similarity</strong>.</p>
      <p>Consider a group of documents as follows:</p>
      <code>
"the quick brown fox jumps over the lazy dog"
"the slow brown fox jumps over the diligent dog"
      </code>
      <p>which we refer to as a corpus.</p>
      <p>We want to compute their cosine similarity with a query, which can be regarded simply as another document:</p>
      <code>  
"a quick puppy becomes a lazy dog"
      </code>
      <p>To do this, we calculate the (normalized) term frequency of each document in the corpus:</p>
      <code>
{
  "the": 1,
  "quick": 0.5,
  "brown": 0.5,
  "fox": 0.5,
  "jumps": 0.5,
  "over": 0.5,
  "lazy": 0.5,
  "dog": 0.5
}
      </code>
      <p>and</p>
      <code>  
{
  "the": 1,
  "slow": 0.5,
  "brown": 0.5,
  "fox": 0.5,
  "jumps": 0.5,
  "over": 0.5,
  "diligent": 0.5,
  "dog": 0.5
}
      </code>
      <p>We also calculate the inverse document frequency of terms in the corpus:</p>
      <code>  
{
  "the": 0.0,
  "quick": 0.69314718056,
  "brown": 0.0,
  "fox": 0.0,
  "jumps": 0.0,
  "over": 0.0,
  "lazy": 0.69314718056,
  "dog": 0.0,
  "slow": 0.69314718056,
  "diligent": 0.69314718056
}
      </code>
      <p>The cosine similarity of each document with the query is calculated with the following pseudo-code:</p>
      <code>
dot_product / magnitude where:
(1) tf = term frequency
(2) idf = inverse document frequency
(3) dot_product = sum(tf * idf of each document term)
(4) magnitude = sqrt(sum(square(tf * idf of each document term))) * sqrt(len(query))
      </code>
      <p>giving us:</p>
      <code>
{
  "the quick brown fox jumps over the lazy dog": 0.5345224838248488,
  "the slow brown fox jumps over the diligent dog": 0.0
}
      </code>
    `
  }
]

type EDITABLE_PART = string

const EDITABLE: EDITABLE_PART[] = [
  `def count_words(document: str) -> dict:
	count = {}
	for word in document.split():
		if word not in count:
			count[word] = 1
		else:
			# Complete this function!
	return count
`,
  `def normalized_word_count(document: str) -> dict:
	count = {}
	max_count = 0

	for word in document.split():
		count[word] = count.get(word, 0) + 1
		# Update max_count here
	for word in count:
		# Divide counts by max_count
	return count
`,
  `def inverse_doc_freq(text: str) -> dict:
	def normalized_word_count(document: str) -> dict:
		count = {}
		max_count = 1

		for word in document.split():
			count[word] = count.get(word, 0) + 1
			max_count = max(count[word], max_count)
		
		for word in count:
			count[word] /= max_count
		
		return count
	
	documents = text.split(", ")
	counts = list(map(normalized_word_count, documents))

	all_terms = set()
	for count in counts:
		for term in count.keys():
			# Add term to all_terms

	result = {}
	for term in all_terms:
		for count in counts:
			if term in count:
				if term not in result:
					result[term] = 1
				else:
					# Increment count of term in result by 1

	n_docs = len(counts)
	for term in result:
		# result[term] is now the number of documents in which the term appears
		# Change result[term] to the term's inverse document frequency using math.log

	return result
`,
  `def cos_sim(query: str, text: str) -> dict:
	def normalized_word_count(document: str) -> dict:
		count = {}
		max_count = 0

		for word in document.split():
			count[word] = count.get(word, 0) + 1
			max_count = max(count[word], max_count)
		
		for word in count:
			count[word] /= max_count
		
		return count

	documents = text.split(", ")
	tf = list(map(normalized_word_count, documents))

	def inverse_doc_freq(tf: list) -> dict:
		all_terms = set()
		for count in tf:
			for term in count.keys():
				all_terms.add(term)
		
		result = {}
		for term in all_terms:
			for count in tf:
				if term in count:
					result[term] = result.get(term, 0) + 1
		
		n_docs = len(tf)
		for term in result:
			result[term] = math.log(n_docs / result[term])
		
		return result
	
	idf = inverse_doc_freq(tf)
	query_terms = query.split()

	result = {}
	for i, doc in enumerate(documents):
		dot_product = 0
		for term in tf[i]:
			if term in query_terms:
				# Increment dot_product by the product of tf[i][term] and idf[term]

		magnitude = ((sum([(idf[term] * tf[i][term]) ** 2 for term in tf[i]])) ** (1/2.0)) * ((len(query_terms)) ** (1/2.0))
		# Change result[doc] to the dot_product divided by magnitude

	return result
`
]

type HIDDEN_PART = {
  function_name: string,
  function_return_type: string,
  test_query: string,
  test_cases: {
    [key: string]: {
      [key: string]: number
    }
  }
}

const HIDDEN: HIDDEN_PART[] = [
  {
    "function_name": "count_words",
    "function_return_type": "dict",
    "test_query": "",
    "test_cases": {
      "buffalo buffalo buffalo buffalo buffalo buffalo buffalo buffalo": {
        "buffalo": 8
      },
      "she was young the way an actual young person is young": {
        "she": 1,
        "was": 1,
        "young": 3,
        "the": 1,
        "way": 1,
        "an": 1,
        "actual": 1,
        "person": 1,
        "is": 1
      }
    }
  },
  {
    "function_name": "normalized_word_count",
    "function_return_type": "dict",
    "test_query": "",
    "test_cases": {
      "but I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system": { "but": 0.5, "I": 1.0, "must": 0.5, "explain": 0.5, "to": 0.5, "you": 1.0, "how": 0.5, "all": 0.5, "this": 0.5, "mistaken": 0.5, "idea": 0.5, "of": 1.0, "denouncing": 0.5, "pleasure": 0.5, "and": 1.0, "praising": 0.5, "pain": 0.5, "was": 0.5, "born": 0.5, "will": 0.5, "give": 0.5, "a": 0.5, "complete": 0.5, "account": 0.5, "the": 0.5, "system": 0.5 },
      "but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful": { "but": 1.0, "because": 1.0, "those": 1.0, "who": 1.0, "do": 1.0, "not": 1.0, "know": 1.0, "how": 1.0, "to": 1.0, "pursue": 1.0, "pleasure": 1.0, "rationally": 1.0, "encounter": 1.0, "consequences": 1.0, "that": 1.0, "are": 1.0, "extremely": 1.0, "painful": 1.0 },
      "but who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences": { "but": 0.5, "who": 1.0, "has": 1.0, "any": 0.5, "right": 0.5, "to": 1.0, "find": 0.5, "fault": 0.5, "with": 0.5, "a": 1.0, "man": 0.5, "chooses": 0.5, "enjoy": 0.5, "pleasure": 0.5, "that": 0.5, "no": 0.5, "annoying": 0.5, "consequences": 0.5 },
      "we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment": { "we": 0.5, "denounce": 0.5, "with": 0.5, "righteous": 0.5, "indignation": 0.5, "and": 1.0, "dislike": 0.5, "men": 0.5, "who": 0.5, "are": 0.5, "so": 0.5, "beguiled": 0.5, "demoralized": 0.5, "by": 0.5, "the": 1.0, "charms": 0.5, "of": 1.0, "pleasure": 0.5, "moment": 0.5 },
      "but in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted": { "but": 0.5, "in": 0.5, "certain": 0.5, "circumstances": 0.5, "and": 1.0, "owing": 0.5, "to": 1.0, "the": 1.0, "claims": 0.5, "of": 1.0, "duty": 0.5, "or": 0.5, "obligations": 0.5, "business": 0.5, "it": 0.5, "will": 0.5, "frequently": 0.5, "occur": 0.5, "that": 0.5, "pleasures": 0.5, "have": 0.5, "be": 0.5, "repudiated": 0.5, "annoyances": 0.5, "accepted": 0.5 }
    }
  },
  {
    "function_name": "inverse_doc_freq",
    "function_return_type": "dict",
    "test_query": "",
    "test_cases": {
      "buffalo buffalo buffalo buffalo buffalo buffalo buffalo buffalo, she was young the way an actual young person is young": { "way": 0.6931471805599453, "person": 0.6931471805599453, "an": 0.6931471805599453, "is": 0.6931471805599453, "buffalo": 0.6931471805599453, "the": 0.6931471805599453, "young": 0.6931471805599453, "she": 0.6931471805599453, "was": 0.6931471805599453, "actual": 0.6931471805599453 },
      "but I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful, but who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, but in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted": { "system": 1.6094379124341003, "denounce": 1.6094379124341003, "annoyances": 1.6094379124341003, "you": 1.6094379124341003, "find": 1.6094379124341003, "this": 1.6094379124341003, "because": 1.6094379124341003, "claims": 1.6094379124341003, "to": 0.22314355131420976, "will": 0.9162907318741551, "charms": 1.6094379124341003, "moment": 1.6094379124341003, "circumstances": 1.6094379124341003, "occur": 1.6094379124341003, "obligations": 1.6094379124341003, "be": 1.6094379124341003, "with": 0.9162907318741551, "idea": 1.6094379124341003, "indignation": 1.6094379124341003, "and": 0.5108256237659907, "of": 0.5108256237659907, "but": 0.22314355131420976, "account": 1.6094379124341003, "duty": 1.6094379124341003, "enjoy": 1.6094379124341003, "or": 1.6094379124341003, "are": 0.9162907318741551, "repudiated": 1.6094379124341003, "men": 1.6094379124341003, "was": 1.6094379124341003, "man": 1.6094379124341003, "a": 0.9162907318741551, "pleasure": 0.22314355131420976, "how": 0.9162907318741551, "explain": 1.6094379124341003, "rationally": 1.6094379124341003, "encounter": 1.6094379124341003, "pain": 1.6094379124341003, "consequences": 0.9162907318741551, "annoying": 1.6094379124341003, "the": 0.5108256237659907, "by": 1.6094379124341003, "that": 0.5108256237659907, "chooses": 1.6094379124341003, "certain": 1.6094379124341003, "have": 1.6094379124341003, "no": 1.6094379124341003, "in": 1.6094379124341003, "accepted": 1.6094379124341003, "demoralized": 1.6094379124341003, "beguiled": 1.6094379124341003, "extremely": 1.6094379124341003, "painful": 1.6094379124341003, "denouncing": 1.6094379124341003, "complete": 1.6094379124341003, "has": 1.6094379124341003, "pleasures": 1.6094379124341003, "righteous": 1.6094379124341003, "not": 1.6094379124341003, "business": 1.6094379124341003, "give": 1.6094379124341003, "mistaken": 1.6094379124341003, "we": 1.6094379124341003, "all": 1.6094379124341003, "any": 1.6094379124341003, "right": 1.6094379124341003, "fault": 1.6094379124341003, "born": 1.6094379124341003, "pursue": 1.6094379124341003, "so": 1.6094379124341003, "owing": 1.6094379124341003, "I": 1.6094379124341003, "dislike": 1.6094379124341003, "it": 1.6094379124341003, "who": 0.5108256237659907, "frequently": 1.6094379124341003, "praising": 1.6094379124341003, "those": 1.6094379124341003, "know": 1.6094379124341003, "must": 1.6094379124341003, "do": 1.6094379124341003 }
    }
  },
  {
    "function_name": "cos_sim",
    "function_return_type": "dict",
    "test_query": "puppies are cute",
    "test_cases": {
      "puppies are cuter than kittens because they are dogs, puppies are cute because dogs are cute and puppies are dogs, puppies are dogs, dogs are not cats and puppies are dogs, people are not puppies, but I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful, but who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, but in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted": {"puppies are cuter than kittens because they are dogs": 0.16410386648624758, "puppies are cute because dogs are cute and puppies are dogs": 0.7498312175377839, "puppies are dogs": 0.5038276571533317, "dogs are not cats and puppies are dogs": 0.23863373923536713, "people are not puppies": 0.22343036299089802, "but I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system": 0.0, "but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful": 0.027508258789763294, "but who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences": 0.0, "we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment": 0.02272031919209309, "but in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted": 0.0},
      "but I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful, but who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, but in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted, he found himself transformed in his bed into a horrible vermin, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections, pitifully thin compared with the size of the rest of him, lay peacefully between its four familiar walls": {"but I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system": 0.0, "but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful": 0.11419820716891338, "but who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences": 0.0, "we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment": 0.10667281135373693, "but in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted": 0.0, "he found himself transformed in his bed into a horrible vermin": 0.0, "and if he lifted his head a little he could see his brown belly": 0.0, "slightly domed and divided by arches into stiff sections": 0.0, "pitifully thin compared with the size of the rest of him": 0.0, "lay peacefully between its four familiar walls": 0.0}
    }
  }
]

type TESTS_PART = string

const TESTS: TESTS_PART[] = [
  `assert count_words('buffalo buffalo buffalo buffalo buffalo buffalo buffalo buffalo') == { 'buffalo': 8 }, "Oops, your function isn't returning the correct value. Try again!"

assert count_words('she was young the way an actual young person is young') == { 'she': 1, 'was': 1, 'young': 3, 'the': 1, 'way': 1, 'an': 1, 'actual': 1, 'person': 1, 'is': 1 }, "Oops, your function isn't returning the correct value. Try again!"
`,
  `assert normalized_word_count('buffalo buffalo buffalo buffalo buffalo buffalo buffalo buffalo') == { 'buffalo': 1.0 }, "Oops, your function isn't returning the correct value. Try again!"

assert normalized_word_count('she was young the way an actual young person is young') == { 'she': 0.3333333333333333, 'was': 0.3333333333333333, 'young': 1.0, 'the': 0.3333333333333333, 'way': 0.3333333333333333, 'an': 0.3333333333333333, 'actual': 0.3333333333333333, 'person': 0.3333333333333333, 'is': 0.3333333333333333 }, "Oops, your function isn't returning the correct value. Try again!"
`,
  `assert inverse_doc_freq("buffalo buffalo buffalo buffalo buffalo buffalo buffalo buffalo, she was young the way an actual young person is young") == { "way": 0.6931471805599453, "person": 0.6931471805599453, "an": 0.6931471805599453, "is": 0.6931471805599453, "buffalo": 0.6931471805599453, "the": 0.6931471805599453, "young": 0.6931471805599453, "she": 0.6931471805599453, "was": 0.6931471805599453, "actual": 0.6931471805599453 }, "Oops, your function isn't returning the correct value. Try again!"

assert inverse_doc_freq("but I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful, but who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, but in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted") == { "system": 1.6094379124341003, "denounce": 1.6094379124341003, "annoyances": 1.6094379124341003, "you": 1.6094379124341003, "find": 1.6094379124341003, "this": 1.6094379124341003, "because": 1.6094379124341003, "claims": 1.6094379124341003, "to": 0.22314355131420976, "will": 0.9162907318741551, "charms": 1.6094379124341003, "moment": 1.6094379124341003, "circumstances": 1.6094379124341003, "occur": 1.6094379124341003, "obligations": 1.6094379124341003, "be": 1.6094379124341003, "with": 0.9162907318741551, "idea": 1.6094379124341003, "indignation": 1.6094379124341003, "and": 0.5108256237659907, "of": 0.5108256237659907, "but": 0.22314355131420976, "account": 1.6094379124341003, "duty": 1.6094379124341003, "enjoy": 1.6094379124341003, "or": 1.6094379124341003, "are": 0.9162907318741551, "repudiated": 1.6094379124341003, "men": 1.6094379124341003, "was": 1.6094379124341003, "man": 1.6094379124341003, "a": 0.9162907318741551, "pleasure": 0.22314355131420976, "how": 0.9162907318741551, "explain": 1.6094379124341003, "rationally": 1.6094379124341003, "encounter": 1.6094379124341003, "pain": 1.6094379124341003, "consequences": 0.9162907318741551, "annoying": 1.6094379124341003, "the": 0.5108256237659907, "by": 1.6094379124341003, "that": 0.5108256237659907, "chooses": 1.6094379124341003, "certain": 1.6094379124341003, "have": 1.6094379124341003, "no": 1.6094379124341003, "in": 1.6094379124341003, "accepted": 1.6094379124341003, "demoralized": 1.6094379124341003, "beguiled": 1.6094379124341003, "extremely": 1.6094379124341003, "painful": 1.6094379124341003, "denouncing": 1.6094379124341003, "complete": 1.6094379124341003, "has": 1.6094379124341003, "pleasures": 1.6094379124341003, "righteous": 1.6094379124341003, "not": 1.6094379124341003, "business": 1.6094379124341003, "give": 1.6094379124341003, "mistaken": 1.6094379124341003, "we": 1.6094379124341003, "all": 1.6094379124341003, "any": 1.6094379124341003, "right": 1.6094379124341003, "fault": 1.6094379124341003, "born": 1.6094379124341003, "pursue": 1.6094379124341003, "so": 1.6094379124341003, "owing": 1.6094379124341003, "I": 1.6094379124341003, "dislike": 1.6094379124341003, "it": 1.6094379124341003, "who": 0.5108256237659907, "frequently": 1.6094379124341003, "praising": 1.6094379124341003, "those": 1.6094379124341003, "know": 1.6094379124341003, "must": 1.6094379124341003, "do": 1.6094379124341003 }, "Oops, your function isn't returning the correct value. Try again!"
`,
  `assert cos_sim("puppies are cuter than kittens because they are dogs, puppies are cute because dogs are cute and puppies are dogs, puppies are dogs, dogs are not cats and puppies are dogs, people are not puppies, but I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful, but who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, but in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted") == {'puppies are cuter than kittens because they are dogs': 0.16410386648624758, 'puppies are cute because dogs are cute and puppies are dogs': 0.7498312175377839, 'puppies are dogs': 0.5038276571533317, 'dogs are not cats and puppies are dogs': 0.23863373923536713, 'people are not puppies': 0.22343036299089802, 'but I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system': 0.0, 'but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful': 0.027508258789763294, 'but who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences': 0.0, 'we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment': 0.02272031919209309, 'but in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted': 0.0}, "Oops, your function isn't returning the correct value. Try again!"

assert cos_sim("but I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful, but who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, but in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted, he found himself transformed in his bed into a horrible vermin, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections, pitifully thin compared with the size of the rest of him, lay peacefully between its four familiar walls") == {'but I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system': 0.0, 'but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful': 0.11419820716891338, 'but who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences': 0.0, 'we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment': 0.10667281135373693, 'but in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted': 0.0, 'he found himself transformed in his bed into a horrible vermin': 0.0, 'and if he lifted his head a little he could see his brown belly': 0.0, 'slightly domed and divided by arches into stiff sections': 0.0, 'pitifully thin compared with the size of the rest of him': 0.0, 'lay peacefully between its four familiar walls': 0.0}, "Oops, your function isn't returning the correct value. Try again!"
`
]

if (![CONTENT, EDITABLE, HIDDEN, TESTS].every(arr => { return arr.length === CONTENT.length })) {
  throw Error("Length of constants inconsistent")
}

export {
  CONTENT_PART,
  EDITABLE_PART,
  HIDDEN_PART,
  TESTS_PART,
  CONTENT,
  EDITABLE,
  HIDDEN,
  TESTS
}
