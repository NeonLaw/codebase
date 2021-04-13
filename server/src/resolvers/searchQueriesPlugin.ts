import { gql, makeExtendSchemaPlugin } from 'graphile-utils';

/* eslint-disable */
const publicQueries = async (query: string) => {
  console.log(query);
  return {
    nodes: [
      {
        body: 'This is a <b>quesiton</b>',
        id: '/questions',
      },
      {
        body: 'This is a <b>pro bono</b>',
        id: '/pro-bono',
      },
      {
        body: 'How can you impeaching a witness?',
        id: '/questions/1',
      },
      {
        body: 'How can you create an easement?',
        id: '/questions/1',
      },
      {
        body: 'How is a joint tenancy severed?',
        id: '/questions/1',
      },
      {
        body: 'What are the differences between CA and federal civil procedure?',
        id: '/questions/1',
      },
      {
        body: 'What is required to seek the remedy of reformation after making a unilateral mistake?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested criminal elements of the Fifth Amendment?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested criminal elements of the Eighth Amendment?',
        id: '/questions/1',
      },
      {
        body: 'What is service of process?',
        id: '/questions/1',
      },
      {
        body: 'What is the exclusionary rule?',
        id: '/questions/1',
      },
      {
        body: 'What is strict products liability?',
        id: '/questions/1',
      },
      {
        body: 'What is a motion to compel?',
        id: '/questions/1',
      },
      {
        body: 'What is the work product privilege of objecting to discovery requests?',
        id: '/questions/1',
      },
      {
        body: 'What is strict liability?',
        id: '/questions/1',
      },
      {
        body: 'What is the attorney-client privilege?',
        id: '/questions/1',
      },
      {
        body: 'How can a party assert the defense of unclean hands?',
        id: '/questions/1',
      },
      {
        body: 'What is a fee simple defeasible?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested joint ownership topics?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested evidence privileges?',
        id: '/questions/1',
      },
      {
        body: 'What is partial integration of a contract?',
        id: '/questions/1',
      },
      {
        body: 'What is collateral estoppel?',
        id: '/questions/1',
      },
      {
        body: 'What is the parol evidence rule?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of a contract?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested topics of breach of contract?',
        id: '/questions/1',
      },
      {
        body: 'How can a client sue an attorney for attorney malpractice?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested types of business associations?',
        id: '/questions/1',
      },
      {
        body: 'What are the big picture topics for crimes?',
        id: '/questions/1',
      },
      {
        body: 'What are the standards of review for constitutional law cases?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of the "Statute of Frauds"?',
        id: '/questions/1',
      },
      {
        body: 'How is joint tenancy considered community property?',
        id: '/questions/1',
      },
      {
        body: 'What are real covenants for real property?',
        id: '/questions/1',
      },
      {
        body: 'What is the harmless error rule as it relates to the exclusionary rule?',
        id: '/questions/1',
      },
      {
        body: 'What are reliance damages?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested freehold estates?',
        id: '/questions/1',
      },
      {
        body: 'What are the duties of an owner of an easement?',
        id: '/questions/1',
      },
      {
        body: 'What is relevance?',
        id: '/questions/1',
      },
      {
        body: 'What is a California general partnership?',
        id: '/questions/1',
      },
      {
        body: 'What constitutes "extreme and outrageous conduct" for IIED?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested criminal elements of the Sixth Amendment?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of murder?',
        id: '/questions/1',
      },
      {
        body: 'What is the dormant commerce clause?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested crimes against a person?',
        id: '/questions/1',
      },
      {
        body: 'What is the takings clause?',
        id: '/questions/1',
      },
      {
        body: 'What are the diversity of citizenship requirements for a federal case?',
        id: '/questions/1',
      },
      {
        body: 'What is a conveyance of real property?',
        id: '/questions/1',
      },
      {
        body: 'What is rational basis review?',
        id: '/questions/1',
      },
      {
        body: 'What is the business judgment rule?',
        id: '/questions/1',
      },
      {
        body: 'What is the "Best Evidence Rule"?',
        id: '/questions/1',
      },
      {
        body: 'What are the requirements of a shareholder to inspect company records?',
        id: '/questions/1',
      },
      {
        body: 'What is a valid prenuptial agreement?',
        id: '/questions/1',
      },
      {
        body: 'What is the free exercise clause of the 1st amendment?',
        id: '/questions/1',
      },
      {
        body: 'What are the warranties of a seller in a real estate contract?',
        id: '/questions/1',
      },
      {
        body: 'What are interrogatories in discovery?',
        id: '/questions/1',
      },
      {
        body: 'What are punitive damages?',
        id: '/questions/1',
      },
      {
        body: 'What is character evidence?',
        id: '/questions/1',
      },
      {
        body: 'What is intestate succession?',
        id: '/questions/1',
      },
      {
        body: 'What is separate property?',
        id: '/questions/1',
      },
      {
        body: 'What is the plain view exception to a search without a warrant?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested intentional torts?',
        id: '/questions/1',
      },
      {
        body: 'What is a defective product?',
        id: '/questions/1',
      },
      {
        body: 'What are the requirements to bring a derivative suit?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested terms of a contract?',
        id: '/questions/1',
      },
      {
        body: 'What a lawyer\'s duties to avoid a conflict of interest?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested questions about documents in evidence?',
        id: '/questions/1',
      },
      {
        body: 'What is misrepresentation?',
        id: '/questions/1',
      },
      {
        body: 'What are character evidence exceptions in criminal court?',
        id: '/questions/1',
      },
      {
        body: 'probable cause',
        id: '/questions/1',
      },
      {
        body: 'What is ademption by extinction?',
        id: '/questions/1',
      },
      {
        body: 'How can a party revoke a will?',
        id: '/questions/1',
      },
      {
        body: 'How do you admit a document in a case?',
        id: '/questions/1',
      },
      {
        body: 'What is an attorney\'s duty of candor?',
        id: '/questions/1',
      },
      {
        body: 'What are the big picture topics for real property?',
        id: '/questions/1',
      },
      {
        body: 'How is community property defined in California?',
        id: '/questions/1',
      },
      {
        body: 'What is a business de jure?',
        id: '/questions/1',
      },
      {
        body: 'How does a court consider a claim to have proper ripeness?',
        id: '/questions/1',
      },
      {
        body: 'What is promissory estoppel?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of tortious nuisance?',
        id: '/questions/1',
      },
      {
        body: 'What are the types of tested post-trial motions?',
        id: '/questions/1',
      },
      {
        body: 'What are the duties of a lawyer representing a corporation?',
        id: '/questions/1',
      },
      {
        body: 'What are the damages for defamation?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested means of acquiring property?',
        id: '/questions/1',
      },
      {
        body: 'What are the conditions on revocable trusts when made inter vivos?',
        id: '/questions/1',
      },
      {
        body: 'How can a party seek specific performance of a contract?',
        id: '/questions/1',
      },
      {
        body: 'What is hearsay?',
        id: '/questions/1',
      },
      {
        body: 'How is malice defined as it relates to murder?',
        id: '/questions/1',
      },
      {
        body: 'What is probable cause?',
        id: '/questions/1',
      },
      {
        body: 'What is the joint tenancy unity of possession?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested topics of jurisdiction?',
        id: '/questions/1',
      },
      {
        body: 'What is the remedy of specific performance?',
        id: '/questions/1',
      },
      {
        body: 'What is constructive eviction?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested defenses to a formation of a contract?',
        id: '/questions/1',
      },
      {
        body: 'What is the race-notice statute?',
        id: '/questions/1',
      },
      {
        body: 'What is an easement by necessity?',
        id: '/questions/1',
      },
      {
        body: 'What is the merger doctrine?',
        id: '/questions/1',
      },
      {
        body: 'What does complete integration of a contract mean?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of fraud?',
        id: '/questions/1',
      },
      {
        body: 'Impeaching a Witness for Truthfulness',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of tortious assault?',
        id: '/questions/1',
      },
      {
        body: 'How can a party assert the defense of mutual mistake?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of first-degree murder?',
        id: '/questions/1',
      },
      {
        body: 'What are incidental damages?',
        id: '/questions/1',
      },
      {
        body: 'What is a privilege log?',
        id: '/questions/1',
      },
      {
        body: 'What is the commerce clause?',
        id: '/questions/1',
      },
      {
        body: 'What is an attractive nuisance?',
        id: '/questions/1',
      },
      {
        body: 'What does proper venue mean?',
        id: '/questions/1',
      },
      {
        body: 'How do you object to Questions of a Witness',
        id: '/questions/1',
      },
      {
        body: 'What are the specific acts character evidence exceptions?',
        id: '/questions/1',
      },
      {
        body: 'How must the police conduct phono lineups?',
        id: '/questions/1',
      },
      {
        body: 'What is a "time is of the essence" clause?',
        id: '/questions/1',
      },
      {
        body: 'What are the 12 hearsay exceptions?',
        id: '/questions/1',
      },
      {
        body: 'What is appurtenant easement?',
        id: '/questions/1',
      },
      {
        body: 'What are the subjects on the bar exam?',
        id: '/questions/1',
      },
      {
        body: 'What are a business directors duties of loyalty?',
        id: '/questions/1',
      },
      {
        body: 'What is the scope of discovery?',
        id: '/questions/1',
      },
      {
        body: 'What is lay witness testimony?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of defamation?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of tortious battery?',
        id: '/questions/1',
      },
      {
        body: 'What is reformation?',
        id: '/questions/1',
      },
      {
        body: 'What is a partition of property for a tenancy in common?',
        id: '/questions/1',
      },
      {
        body: 'What is the Privileges and Immunities Clause?',
        id: '/questions/1',
      },
      {
        body: 'What does "concerning the moving party" mean in a defamation claim?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested public policy exclusions?',
        id: '/questions/1',
      },
      {
        body: 'What is a joinder of claims?',
        id: '/questions/1',
      },
      {
        body: 'What is the eleventh amendment?',
        id: '/questions/1',
      },
      {
        body: 'What is the defense of insanity?',
        id: '/questions/1',
      },
      {
        body: 'What is an attorney\'s duty to safeguard?',
        id: '/questions/1',
      },
      {
        body: 'What is the consumer expectation test?',
        id: '/questions/1',
      },
      {
        body: 'What must an attorney do after withdrawing from a client?',
        id: '/questions/1',
      },
      {
        body: 'What is recission?',
        id: '/questions/1',
      },
      {
        body: 'What is the transmutation of community property?',
        id: '/questions/1',
      },
      {
        body: 'What are the big picture topics for torts?',
        id: '/questions/1',
      },
      {
        body: 'What are the big picture topics for constitutional law?',
        id: '/questions/1',
      },
      {
        body: 'What is the business records exception to hearsay?',
        id: '/questions/1',
      },
      {
        body: 'What is "slander per se"?',
        id: '/questions/1',
      },
      {
        body: 'What is attorney\'s duty to report for corporate clients?',
        id: '/questions/1',
      },
      {
        body: 'What is the medical examinations privilege?',
        id: '/questions/1',
      },
      {
        body: 'What is quasi-community property in California?',
        id: '/questions/1',
      },
      {
        body: 'What is an attorney\'s duty to avoid frivilous claims?',
        id: '/questions/1',
      },
      {
        body: 'What is a long arm statute?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested terms of gift distribution?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of IIED?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of kidnapping?',
        id: '/questions/1',
      },
      {
        body: 'What is the shelter rule for bona-fide purchasers?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of burglary?',
        id: '/questions/1',
      },
      {
        body: 'What is the need to meet and confer?',
        id: '/questions/1',
      },
      {
        body: 'How can a party defend themselves from an intentional tort with the defense of consent?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of negligent infliction of emotional distress?',
        id: '/questions/1',
      },
      {
        body: 'What is the joint tenancy unity of time?',
        id: '/questions/1',
      },
      {
        body: 'What are the big picture topics for professional responsibility?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of adverse possession?',
        id: '/questions/1',
      },
      {
        body: 'How can a party assert the defense of laches?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of false imprisonment?',
        id: '/questions/1',
      },
      {
        body: 'What is the merchant confirmation memo?',
        id: '/questions/1',
      },
      {
        body: 'What are valid searches and seizures?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested criminal elements of the Fourth Amendment?',
        id: '/questions/1',
      },
      {
        body: 'What is required for the disclosure of experts?',
        id: '/questions/1',
      },
      {
        body: 'How can a court fill in void provisions?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested elements of justiciability?',
        id: '/questions/1',
      },
      {
        body: 'What is a joint tenancy?',
        id: '/questions/1',
      },
      {
        body: 'What are the powers of a board in a corporation?',
        id: '/questions/1',
      },
      {
        body: 'What is a defamatory statement?',
        id: '/questions/1',
      },
      {
        body: 'What is intermediate scrutiny?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested incomplete crimes?',
        id: '/questions/1',
      },
      {
        body: 'What is the defense of defense of property?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of trespass to chattel and conversion?',
        id: '/questions/1',
      },
      {
        body: 'What are nominal damages?',
        id: '/questions/1',
      },
      {
        body: 'Defense of Qualified Privilege to Defamation',
        id: '/questions/1',
      },
      {
        body: 'What is the burden of production?',
        id: '/questions/1',
      },
      {
        body: 'What is the subsequent remedial measures public policy exception?',
        id: '/questions/1',
      },
      {
        body: 'What is a material breach of contract?',
        id: '/questions/1',
      },
      {
        body: 'What does "matters of public concern" mean in a defamation claim?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested crimes of theft?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested shareholder rights topics for business associations?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of trespass to land?',
        id: '/questions/1',
      },
      {
        body: 'What is res judicata?',
        id: '/questions/1',
      },
      {
        body: 'What is replivin?',
        id: '/questions/1',
      },
      {
        body: 'How must California attorneys handle written fee agreements?',
        id: '/questions/1',
      },
      {
        body: 'What  are equitable servitudes?',
        id: '/questions/1',
      },
      {
        body: 'What are the big picture topics for remedies?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of defamation of a public person?',
        id: '/questions/1',
      },
      {
        body: 'What is anticipatory repudiation?',
        id: '/questions/1',
      },
      {
        body: 'What is the rule on the discoverability of investigative reports?',
        id: '/questions/1',
      },
      {
        body: 'What are the big picture topics for evidence?',
        id: '/questions/1',
      },
      {
        body: 'What are the differences between an offer and an advertisement?',
        id: '/questions/1',
      },
      {
        body: 'When will a court consider severing a criminal case?',
        id: '/questions/1',
      },
      {
        body: 'What test is used to determine the validity of a regulation of symbolic speech?',
        id: '/questions/1',
      },
      {
        body: 'What is a foreseeable plaintiff?',
        id: '/questions/1',
      },
      {
        body: 'What is a valid real property contract?',
        id: '/questions/1',
      },
      {
        body: 'What are the big picture topics for business associations?',
        id: '/questions/1',
      },
      {
        body: 'What rights do the Fourth Amendment guarantee?',
        id: '/questions/1',
      },
      {
        body: 'What is judicial notice?',
        id: '/questions/1',
      },
      {
        body: 'How are conflicts imputed on a new firm in CA?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested restrictions on property topics?',
        id: '/questions/1',
      },
      {
        body: 'How can a party rehabilitate a previously impeached witness?',
        id: '/questions/1',
      },
      {
        body: 'How can a party answering an interrogatory?',
        id: '/questions/1',
      },
      {
        body: 'What are zoning regulations?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of involuntary manslaughter?',
        id: '/questions/1',
      },
      {
        body: 'What is the applicable law for the sale of goods?',
        id: '/questions/1',
      },
      {
        body: 'What is a temporary restraining order?',
        id: '/questions/1',
      },
      {
        body: 'What is habit and custom evidence?',
        id: '/questions/1',
      },
      {
        body: 'How can a party defend themselves from an intentional tort with self-defense?',
        id: '/questions/1',
      },
      {
        body: 'What is the pro-rata share rule for communiyt property?',
        id: '/questions/1',
      },
      {
        body: 'What does quasi-community property mean?',
        id: '/questions/1',
      },
      {
        body: 'How can a party adequately object to discovery requests?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested landlord tenant issues?',
        id: '/questions/1',
      },
      {
        body: 'What is the standard from US v. Katz?',
        id: '/questions/1',
      },
      {
        body: 'What is a valid will?',
        id: '/questions/1',
      },
      {
        body: 'What are the UCC rules for merchants?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested pre-trial motions?',
        id: '/questions/1',
      },
      {
        body: 'What is the defense of entrapment?',
        id: '/questions/1',
      },
      {
        body: 'How does California handle Divorce and Community Property?',
        id: '/questions/1',
      },
      {
        body: 'What are the big picture topics for civil procedure?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of a criminal conspiracy?',
        id: '/questions/1',
      },
      {
        body: 'How can a party assert the defense of others?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of voluntary manslaughter?',
        id: '/questions/1',
      },
      {
        body: 'What is strict scrutiny?',
        id: '/questions/1',
      },
      {
        body: 'What is the burden of production in producing evidence?',
        id: '/questions/1',
      },
      {
        body: 'What is a preliminary injunction?',
        id: '/questions/1',
      },
      {
        body: 'What is the joint tenancy unity of interest?',
        id: '/questions/1',
      },
      {
        body: 'What are the exceptions to statute of frauds?',
        id: '/questions/1',
      },
      {
        body: 'What are the types of discovery motions?',
        id: '/questions/1',
      },
      {
        body: 'What are the big picture topics for wills and trusts?',
        id: '/questions/1',
      },
      {
        body: 'What are the character evidence exceptions in civil court?',
        id: '/questions/1',
      },
      {
        body: 'What does "plain meaning" mean when a court analyzes a contract?',
        id: '/questions/1',
      },
      {
        body: 'How can a party assert the defense of recission?',
        id: '/questions/1',
      },
      {
        body: 'What are the rules surrounding written production?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of robbery?',
        id: '/questions/1',
      },
      {
        body: 'What is an easement in gross?',
        id: '/questions/1',
      },
      {
        body: 'What does a reasonable expectation of privacy mean?',
        id: '/questions/1',
      },
      {
        body: 'How can a court determine the validity of a regulation about the Establishment Clause?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested elements of constitutional federal powers?',
        id: '/questions/1',
      },
      {
        body: 'When must an attorney withdraw from representing a client?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested defenses to defamation?',
        id: '/questions/1',
      },
      {
        body: 'What happens to community property after a permanent separation?',
        id: '/questions/1',
      },
      {
        body: 'What is the balancing test a court uses for Due Process?',
        id: '/questions/1',
      },
      {
        body: 'How is Community Property defined in California?',
        id: '/questions/1',
      },
      {
        body: 'What is the joint tenancy unity of title?',
        id: '/questions/1',
      },
      {
        body: 'How can a party assert the contract breach defense of "Duty to Mitigate"?',
        id: '/questions/1',
      },
      {
        body: 'How are goods defined according the UCC?',
        id: '/questions/1',
      },
      {
        body: 'What is the Pinkerton liability of co-conspirators?',
        id: '/questions/1',
      },
      {
        body: 'What are the requirements for federal court standing?',
        id: '/questions/1',
      },
      {
        body: 'What is required for an attorney to permissively withdraw from representing a client?',
        id: '/questions/1',
      },
      {
        body: 'How can a party remove a case to federal court?',
        id: '/questions/1',
      },
      {
        body: 'What are the elements of negligence?',
        id: '/questions/1',
      },
      {
        body: 'What are the rights of creditors in obtaining trust property?',
        id: '/questions/1',
      },
      {
        body: 'What is the dying declaration exception to hearsay?',
        id: '/questions/1',
      },
      {
        body: 'What is a tenancy in common?',
        id: '/questions/1',
      },
      {
        body: 'What are the tested subjects of witnesses?',
        id: '/questions/1',
      },
      {
        body: 'What are the authentication requirements for documents?',
        id: '/questions/1',
      },
      {
        body: 'What are the big picture topics for contracts?',
        id: '/questions/1',
      },
      {
        body: 'What is the good faith exception to a warrantless search?',
        id: '/questions/1',
      },
      {
        body: 'What are the big picture topics for community property?',
        id: '/questions/1',
      },
      {
        body: 'What is the Right to Remain Silent?',
        id: '/questions/1',
      },
      {
        body: 'What are the duties of a landlord?',
        id: '/questions/1',
      },
      {
        body: 'What is declatory relief?',
        id: '/questions/1',
      },
      {
        body: 'What is federal subject matter jurisdiction?',
        id: '/questions/1',
      },
      {
        body: 'What is federal court jurisdiction?',
        id: '/questions/1',
      },
      {
        body: 'What is larceny?',
        id: '/questions/1',
      },
      {
        body: 'What is an attorney\'s duty to report unethical behavior?',
        id: '/questions/1',
      },
      {
        body: 'burglary',
        id: '/questions/1',
      },
      {
        body: 'How can you request the production of documents?',
        id: '/questions/1',
      },
      {
        body: 'What is the spousal privilege of testimony?',
        id: '/questions/1',
      },
      {
        body: 'What is personal jurisdiction?',
        id: '/questions/1',
      },
    ]
  };
};


export const searchQueriesPlugin = makeExtendSchemaPlugin(() => {
  return {
    resolvers: {
      Query: {
        publicQueries,
      }
    },
    typeDefs: gql`
      extend type Query {
        publicQueries: [PublicQueryPayload]
      }

      type PublicQueryPayload {
        id: String!
        body: String!
      }
    `,
  };
});
