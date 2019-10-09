import * as Primitive from "../../xml-primitives";

// Source files:
// https://raw.githubusercontent.com/NeuroML/NeuroML2/master/Schemas/NeuroML2/NeuroML_v2beta4.xsd

interface BaseType {
  _exists: boolean;
  _namespace: string;
}
interface _AdExIaFCell extends _BaseCellMembPotCap {
  a: string;
  b: string;
  delT: string;
  EL: string;
  gL: string;
  refract: string;
  reset: string;
  tauw: string;
  thresh: string;
  VT: string;
}
export interface AdExIaFCell extends _AdExIaFCell {
  constructor: { new (): AdExIaFCell };
}
export var AdExIaFCell: { new (): AdExIaFCell };

export type allowedSpaces =
  | "Euclidean_1D"
  | "Euclidean_2D"
  | "Euclidean_3D"
  | "Grid_1D"
  | "Grid_2D"
  | "Grid_3D";
interface _allowedSpaces extends Primitive._string {
  content: allowedSpaces;
}

interface _AlphaCondSynapse extends _BasePynnSynapse {
  e_rev: number;
}
export interface AlphaCondSynapse extends _AlphaCondSynapse {
  constructor: { new (): AlphaCondSynapse };
}
export var AlphaCondSynapse: { new (): AlphaCondSynapse };

interface _AlphaCurrentSynapse extends _BaseCurrentBasedSynapse {
  ibase: string;
  tau: string;
}
export interface AlphaCurrentSynapse extends _AlphaCurrentSynapse {
  constructor: { new (): AlphaCurrentSynapse };
}
export var AlphaCurrentSynapse: { new (): AlphaCurrentSynapse };

interface _AlphaCurrSynapse extends _BasePynnSynapse {}
export interface AlphaCurrSynapse extends _AlphaCurrSynapse {
  constructor: { new (): AlphaCurrSynapse };
}
export var AlphaCurrSynapse: { new (): AlphaCurrSynapse };

interface _AlphaSynapse extends _BaseConductanceBasedSynapse {
  tau: string;
}
export interface AlphaSynapse extends _AlphaSynapse {
  constructor: { new (): AlphaSynapse };
}
export var AlphaSynapse: { new (): AlphaSynapse };

/** Placeholder for MIRIAM related metadata, among others. */
interface _Annotation extends BaseType {}
export interface Annotation extends _Annotation {
  constructor: { new (): Annotation };
}
export var Annotation: { new (): Annotation };

/** Anything which can have a unique (within its parent) id of the form NmlId (spaceless combination of letters, numbers and underscore). */
interface _Base extends _BaseWithoutId {
  id: string;
}
export interface Base extends _Base {
  constructor: { new (): Base };
}
export var Base: { new (): Base };

interface _BaseCell extends _Standalone {}
export interface BaseCell extends _BaseCell {
  constructor: { new (): BaseCell };
}
export var BaseCell: { new (): BaseCell };

interface _BaseCellMembPotCap extends _BaseCell {
  /** This is to prevent it conflicting with attribute c (lowercase) e.g. in izhikevichCell2007 */
  C: string;
}
export interface BaseCellMembPotCap extends _BaseCellMembPotCap {
  constructor: { new (): BaseCellMembPotCap };
}
export var BaseCellMembPotCap: { new (): BaseCellMembPotCap };

interface _BaseConductanceBasedSynapse extends _BaseVoltageDepSynapse {
  erev: string;
  gbase: string;
}
export interface BaseConductanceBasedSynapse
  extends _BaseConductanceBasedSynapse {
  constructor: { new (): BaseConductanceBasedSynapse };
}
export var BaseConductanceBasedSynapse: { new (): BaseConductanceBasedSynapse };

interface _BaseConductanceBasedSynapseTwo extends _BaseVoltageDepSynapse {
  erev: string;
  gbase1: string;
  gbase2: string;
}
export interface BaseConductanceBasedSynapseTwo
  extends _BaseConductanceBasedSynapseTwo {
  constructor: { new (): BaseConductanceBasedSynapseTwo };
}
export var BaseConductanceBasedSynapseTwo: {
  new (): BaseConductanceBasedSynapseTwo;
};

/** Base of all synaptic connections (chemical/electrical/analog, etc.) inside projections */
interface _BaseConnection extends _BaseNonNegativeIntegerId {}
export interface BaseConnection extends _BaseConnection {
  constructor: { new (): BaseConnection };
}
export var BaseConnection: { new (): BaseConnection };

/** Base of all synaptic connections with preCell, postSegment, etc.
 * See BaseConnectionOldFormat */
interface _BaseConnectionNewFormat extends _BaseConnection {
  postCell: string;
  postFractionAlong: number;
  postSegment: number;
  preCell: string;
  preFractionAlong: number;
  preSegment: number;
}
export interface BaseConnectionNewFormat extends _BaseConnectionNewFormat {
  constructor: { new (): BaseConnectionNewFormat };
}
export var BaseConnectionNewFormat: { new (): BaseConnectionNewFormat };

/** Base of all synaptic connections with preCellId, postSegmentId, etc.
 * Note: this is not the best name for these attributes, since Id is superfluous, hence BaseConnectionNewFormat */
interface _BaseConnectionOldFormat extends _BaseConnection {
  postCellId: string;
  postFractionAlong: number;
  postSegmentId: number;
  preCellId: string;
  preFractionAlong: number;
  preSegmentId: number;
}
export interface BaseConnectionOldFormat extends _BaseConnectionOldFormat {
  constructor: { new (): BaseConnectionOldFormat };
}
export var BaseConnectionOldFormat: { new (): BaseConnectionOldFormat };

interface _BaseCurrentBasedSynapse extends _BaseSynapse {}
export interface BaseCurrentBasedSynapse extends _BaseCurrentBasedSynapse {
  constructor: { new (): BaseCurrentBasedSynapse };
}
export var BaseCurrentBasedSynapse: { new (): BaseCurrentBasedSynapse };

/** Anything which can have a unique (within its parent) id, which must be an integer zero or greater. */
interface _BaseNonNegativeIntegerId extends _BaseWithoutId {
  id: number;
}
export interface BaseNonNegativeIntegerId extends _BaseNonNegativeIntegerId {
  constructor: { new (): BaseNonNegativeIntegerId };
}
export var BaseNonNegativeIntegerId: { new (): BaseNonNegativeIntegerId };

interface _basePyNNCell extends _BaseCell {
  cm: number;
  i_offset: number;
  tau_syn_E: number;
  tau_syn_I: number;
  v_init: number;
}
export interface basePyNNCell extends _basePyNNCell {
  constructor: { new (): basePyNNCell };
}
export var basePyNNCell: { new (): basePyNNCell };

interface _basePyNNIaFCell extends _basePyNNCell {
  tau_m: number;
  tau_refrac: number;
  v_reset: number;
  v_rest: number;
  v_thresh: number;
}
export interface basePyNNIaFCell extends _basePyNNIaFCell {
  constructor: { new (): basePyNNIaFCell };
}
export var basePyNNIaFCell: { new (): basePyNNIaFCell };

interface _basePyNNIaFCondCell extends _basePyNNIaFCell {
  e_rev_E: number;
  e_rev_I: number;
}
export interface basePyNNIaFCondCell extends _basePyNNIaFCondCell {
  constructor: { new (): basePyNNIaFCondCell };
}
export var basePyNNIaFCondCell: { new (): basePyNNIaFCondCell };

interface _BasePynnSynapse extends _BaseSynapse {
  tau_syn: number;
}
export interface BasePynnSynapse extends _BasePynnSynapse {
  constructor: { new (): BasePynnSynapse };
}
export var BasePynnSynapse: { new (): BasePynnSynapse };

interface _BaseSynapse extends _Standalone {}
export interface BaseSynapse extends _BaseSynapse {
  constructor: { new (): BaseSynapse };
}
export var BaseSynapse: { new (): BaseSynapse };

interface _BaseVoltageDepSynapse extends _BaseSynapse {}
export interface BaseVoltageDepSynapse extends _BaseVoltageDepSynapse {
  constructor: { new (): BaseVoltageDepSynapse };
}
export var BaseVoltageDepSynapse: { new (): BaseVoltageDepSynapse };

/** Base element without ID specified *yet*, e.g. for an element with a particular requirement on its id which does not comply with NmlId (e.g. Segment needs nonNegativeInteger). */
interface _BaseWithoutId extends BaseType {
  neuroLexId?: string;
}
export interface BaseWithoutId extends _BaseWithoutId {
  constructor: { new (): BaseWithoutId };
}
export var BaseWithoutId: { new (): BaseWithoutId };

/** Standalone element which is usually inside a single cell, but could be outside and
 * referenced by id. */
interface _BiophysicalProperties extends _Standalone {
  extracellularProperties?: ExtracellularProperties;
  intracellularProperties?: IntracellularProperties;
  membraneProperties: MembraneProperties;
}
export interface BiophysicalProperties extends _BiophysicalProperties {
  constructor: { new (): BiophysicalProperties };
}
export var BiophysicalProperties: { new (): BiophysicalProperties };

/** Standalone element which is usually inside a single cell, but could be outside and
 * referenced by id. */
interface _BiophysicalProperties2CaPools extends _Standalone {
  extracellularProperties?: ExtracellularProperties;
  intracellularProperties2CaPools?: IntracellularProperties2CaPools;
  membraneProperties2CaPools: MembraneProperties2CaPools;
}
export interface BiophysicalProperties2CaPools
  extends _BiophysicalProperties2CaPools {
  constructor: { new (): BiophysicalProperties2CaPools };
}
export var BiophysicalProperties2CaPools: {
  new (): BiophysicalProperties2CaPools;
};

interface _BlockingPlasticSynapse extends _ExpTwoSynapse {
  blockMechanism?: BlockMechanism;
  plasticityMechanism?: PlasticityMechanism;
}
export interface BlockingPlasticSynapse extends _BlockingPlasticSynapse {
  constructor: { new (): BlockingPlasticSynapse };
}
export var BlockingPlasticSynapse: { new (): BlockingPlasticSynapse };

interface _BlockMechanism extends BaseType {
  blockConcentration: string;
  scalingConc: string;
  scalingVolt: string;
  species: string;
  type: BlockTypes;
}
export interface BlockMechanism extends _BlockMechanism {
  constructor: { new (): BlockMechanism };
}
export var BlockMechanism: { new (): BlockMechanism };

export type BlockTypes = "voltageConcDepBlockMechanism";
interface _BlockTypes extends Primitive._string {
  content: BlockTypes;
}

interface _Case extends BaseType {
  condition?: string;
  value: string;
}
export interface Case extends _Case {
  constructor: { new (): Case };
}
export var Case: { new (): Case };

interface _Cell extends _BaseCell {
  /** Should only be used if biophysicalProperties element is outside the cell.
   * This points to the id of the biophysicalProperties */
  $biophysicalProperties?: string;
  /** Should only be used if morphology element is outside the cell.
   * This points to the id of the morphology */
  $morphology?: string;
  biophysicalProperties?: BiophysicalProperties;
  morphology?: Morphology;
}
export interface Cell extends _Cell {
  constructor: { new (): Cell };
}
export var Cell: { new (): Cell };

interface _Cell2CaPools extends _Cell {
  biophysicalProperties2CaPools?: BiophysicalProperties2CaPools;
}
export interface Cell2CaPools extends _Cell2CaPools {
  constructor: { new (): Cell2CaPools };
}
export var Cell2CaPools: { new (): Cell2CaPools };

interface _CellSet extends _Base {
  select: string;
}
export interface CellSet extends _CellSet {
  constructor: { new (): CellSet };
}
export var CellSet: { new (): CellSet };

interface _ChannelDensity extends _Base {
  condDensity?: string;
  erev: string;
  /** Specifying the ion here again is redundant, this will be set in ionChannel definition. It is added here
   * TEMPORARILY since selecting all ca or na conducting channel populations/densities in a cell would be difficult otherwise.
   * Also, it will make it easier to set the correct native simulator value for erev (e.g. ek for ion = k in NEURON).
   * Currently a required attribute.
   * It should be removed in the longer term, due to possible inconsistencies in this value and that in the ionChannel
   * element. TODO: remove. */
  ion: string;
  ionChannel: string;
  segment?: number;
  segmentGroup?: string;
  variableParameter?: VariableParameter[];
}
export interface ChannelDensity extends _ChannelDensity {
  constructor: { new (): ChannelDensity };
}
export var ChannelDensity: { new (): ChannelDensity };

interface _ChannelDensityGHK extends _Base {
  /** Specifying the ion here again is redundant, this will be set in ionChannel definition. It is added here
   * TEMPORARILY since selecting all ca or na conducting channel populations/densities in a cell would be difficult otherwise.
   * Also, it will make it easier to set the correct native simulator value for erev (e.g. ek for ion = k in NEURON).
   * Currently a required attribute.
   * It should be removed in the longer term, due to possible inconsistencies in this value and that in the ionChannel
   * element. TODO: remove. */
  ion: string;
  ionChannel: string;
  permeability: string;
  segment?: string;
  segmentGroup?: string;
}
export interface ChannelDensityGHK extends _ChannelDensityGHK {
  constructor: { new (): ChannelDensityGHK };
}
export var ChannelDensityGHK: { new (): ChannelDensityGHK };

interface _ChannelDensityGHK2 extends _Base {
  condDensity?: string;
  /** Specifying the ion here again is redundant, this will be set in ionChannel definition. It is added here
   * TEMPORARILY since selecting all ca or na conducting channel populations/densities in a cell would be difficult otherwise.
   * Also, it will make it easier to set the correct native simulator value for erev (e.g. ek for ion = k in NEURON).
   * Currently a required attribute.
   * It should be removed in the longer term, due to possible inconsistencies in this value and that in the ionChannel
   * element. TODO: remove. */
  ion: string;
  ionChannel: string;
  segment?: string;
  segmentGroup?: string;
}
export interface ChannelDensityGHK2 extends _ChannelDensityGHK2 {
  constructor: { new (): ChannelDensityGHK2 };
}
export var ChannelDensityGHK2: { new (): ChannelDensityGHK2 };

interface _ChannelDensityNernst extends _Base {
  condDensity?: string;
  /** Specifying the ion here again is redundant, this will be set in ionChannel definition. It is added here
   * TEMPORARILY since selecting all ca or na conducting channel populations/densities in a cell would be difficult otherwise.
   * Also, it will make it easier to set the correct native simulator value for erev (e.g. ek for ion = k in NEURON).
   * Currently a required attribute.
   * It should be removed in the longer term, due to possible inconsistencies in this value and that in the ionChannel
   * element. TODO: remove. */
  ion: string;
  ionChannel: string;
  segment?: string;
  segmentGroup?: string;
  variableParameter?: VariableParameter[];
}
export interface ChannelDensityNernst extends _ChannelDensityNernst {
  constructor: { new (): ChannelDensityNernst };
}
export var ChannelDensityNernst: { new (): ChannelDensityNernst };

interface _ChannelDensityNernstCa2 extends _ChannelDensityNernst {}
export interface ChannelDensityNernstCa2 extends _ChannelDensityNernstCa2 {
  constructor: { new (): ChannelDensityNernstCa2 };
}
export var ChannelDensityNernstCa2: { new (): ChannelDensityNernstCa2 };

interface _ChannelDensityNonUniform extends _Base {
  erev: string;
  /** Specifying the ion here again is redundant, this will be set in ionChannel definition. It is added here
   * TEMPORARILY since selecting all ca or na conducting channel populations/densities in a cell would be difficult otherwise.
   * Also, it will make it easier to set the correct native simulator value for erev (e.g. ek for ion = k in NEURON).
   * Currently a required attribute.
   * It should be removed in the longer term, due to possible inconsistencies in this value and that in the ionChannel
   * element. TODO: remove. */
  ion: string;
  ionChannel: string;
  variableParameter?: VariableParameter[];
}
export interface ChannelDensityNonUniform extends _ChannelDensityNonUniform {
  constructor: { new (): ChannelDensityNonUniform };
}
export var ChannelDensityNonUniform: { new (): ChannelDensityNonUniform };

interface _ChannelDensityNonUniformGHK extends _Base {
  /** Specifying the ion here again is redundant, this will be set in ionChannel definition. It is added here
   * TEMPORARILY since selecting all ca or na conducting channel populations/densities in a cell would be difficult otherwise.
   * Also, it will make it easier to set the correct native simulator value for erev (e.g. ek for ion = k in NEURON).
   * Currently a required attribute.
   * It should be removed in the longer term, due to possible inconsistencies in this value and that in the ionChannel
   * element. TODO: remove. */
  ion: string;
  ionChannel: string;
  variableParameter?: VariableParameter[];
}
export interface ChannelDensityNonUniformGHK
  extends _ChannelDensityNonUniformGHK {
  constructor: { new (): ChannelDensityNonUniformGHK };
}
export var ChannelDensityNonUniformGHK: { new (): ChannelDensityNonUniformGHK };

interface _ChannelDensityNonUniformNernst extends _Base {
  /** Specifying the ion here again is redundant, this will be set in ionChannel definition. It is added here
   * TEMPORARILY since selecting all ca or na conducting channel populations/densities in a cell would be difficult otherwise.
   * Also, it will make it easier to set the correct native simulator value for erev (e.g. ek for ion = k in NEURON).
   * Currently a required attribute.
   * It should be removed in the longer term, due to possible inconsistencies in this value and that in the ionChannel
   * element. TODO: remove. */
  ion: string;
  ionChannel: string;
  variableParameter?: VariableParameter[];
}
export interface ChannelDensityNonUniformNernst
  extends _ChannelDensityNonUniformNernst {
  constructor: { new (): ChannelDensityNonUniformNernst };
}
export var ChannelDensityNonUniformNernst: {
  new (): ChannelDensityNonUniformNernst;
};

interface _ChannelPopulation extends _Base {
  erev: string;
  /** Specifying the ion here again is redundant, this will be set in ionChannel definition. It is added here
   * TEMPORARILY since selecting all ca or na conducting channel populations/densities in a cell would be difficult otherwise.
   * Also, it will make it easier to set the correct native simulator value for erev (e.g. ek for ion = k in NEURON).
   * Currently a required attribute.
   * It should be removed in the longer term, due to possible inconsistencies in this value and that in the ionChannel
   * element. TODO: remove. */
  ion: string;
  ionChannel: string;
  number: number;
  segment?: number;
  segmentGroup?: string;
  variableParameter?: VariableParameter[];
}
export interface ChannelPopulation extends _ChannelPopulation {
  constructor: { new (): ChannelPopulation };
}
export var ChannelPopulation: { new (): ChannelPopulation };

export type channelTypes = "ionChannelPassive" | "ionChannelHH";
interface _channelTypes extends Primitive._string {
  content: channelTypes;
}

interface _ClosedState extends _Base {}
export interface ClosedState extends _ClosedState {
  constructor: { new (): ClosedState };
}
export var ClosedState: { new (): ClosedState };

/** Contains an extension to NeuroML by creating custom LEMS ComponentType. */
interface _ComponentType extends BaseType {
  description?: string;
  extends?: string;
  name: string;
  Constant?: Constant[];
  Dynamics?: Dynamics[];
  Parameter?: Parameter[];
  Requirement?: Requirement[];
}
export interface ComponentType extends _ComponentType {
  constructor: { new (): ComponentType };
}
export var ComponentType: { new (): ComponentType };

interface _CompoundInput extends _Standalone {
  pulseGenerator?: PulseGenerator[];
  rampGenerator?: RampGenerator[];
  sineGenerator?: SineGenerator[];
}
export interface CompoundInput extends _CompoundInput {
  constructor: { new (): CompoundInput };
}
export var CompoundInput: { new (): CompoundInput };

interface _CompoundInputDL extends _Standalone {
  pulseGeneratorDL?: PulseGeneratorDL[];
  rampGeneratorDL?: RampGeneratorDL[];
  sineGeneratorDL?: SineGeneratorDL[];
}
export interface CompoundInputDL extends _CompoundInputDL {
  constructor: { new (): CompoundInputDL };
}
export var CompoundInputDL: { new (): CompoundInputDL };

interface _ConcentrationModel_D extends _DecayingPoolConcentrationModel {}
export interface ConcentrationModel_D extends _ConcentrationModel_D {
  constructor: { new (): ConcentrationModel_D };
}
export var ConcentrationModel_D: { new (): ConcentrationModel_D };

/** LEMS ComponentType for ConditionalDerivedVariable */
interface _ConditionalDerivedVariable extends BaseType {
  dimension: string;
  exposure?: string;
  name: string;
  Case: Case[];
}
export interface ConditionalDerivedVariable
  extends _ConditionalDerivedVariable {
  constructor: { new (): ConditionalDerivedVariable };
}
export var ConditionalDerivedVariable: { new (): ConditionalDerivedVariable };

/** Individual chemical (event based) synaptic connection, weight==1 and no delay */
interface _Connection extends _BaseConnectionOldFormat {}
export interface Connection extends _Connection {
  constructor: { new (): Connection };
}
export var Connection: { new (): Connection };

/** Individual synaptic connection with weight and delay */
interface _ConnectionWD extends _BaseConnectionOldFormat {
  delay: string;
  weight: number;
}
export interface ConnectionWD extends _ConnectionWD {
  constructor: { new (): ConnectionWD };
}
export var ConnectionWD: { new (): ConnectionWD };

/** LEMS ComponentType for Constant. */
interface _Constant extends BaseType {
  description?: string;
  dimension: string;
  name: string;
  value: string;
}
export interface Constant extends _Constant {
  constructor: { new (): Constant };
}
export var Constant: { new (): Constant };

/** Individual continuous/analog synaptic connection */
interface _ContinuousConnection extends _BaseConnectionNewFormat {
  postComponent: string;
  preComponent: string;
}
export interface ContinuousConnection extends _ContinuousConnection {
  constructor: { new (): ContinuousConnection };
}
export var ContinuousConnection: { new (): ContinuousConnection };

/** Individual continuous/analog synaptic connection - instance based */
interface _ContinuousConnectionInstance extends _ContinuousConnection {}
export interface ContinuousConnectionInstance
  extends _ContinuousConnectionInstance {
  constructor: { new (): ContinuousConnectionInstance };
}
export var ContinuousConnectionInstance: {
  new (): ContinuousConnectionInstance;
};

/** Projection between two populations consisting of analog connections (e.g. graded synapses) */
interface _ContinuousProjection extends _Base {
  postsynapticPopulation: string;
  presynapticPopulation: string;
  continuousConnection?: ContinuousConnection[];
  continuousConnectionInstance?: ContinuousConnectionInstance[];
}
export interface ContinuousProjection extends _ContinuousProjection {
  constructor: { new (): ContinuousProjection };
}
export var ContinuousProjection: { new (): ContinuousProjection };

interface _DecayingPoolConcentrationModel extends _Standalone {
  decayConstant: string;
  /** Should not be required, as it's present on the species element! */
  ion: string;
  restingConc: string;
  shellThickness: string;
}
export interface DecayingPoolConcentrationModel
  extends _DecayingPoolConcentrationModel {
  constructor: { new (): DecayingPoolConcentrationModel };
}
export var DecayingPoolConcentrationModel: {
  new (): DecayingPoolConcentrationModel;
};

/** LEMS ComponentType for DerivedVariable */
interface _DerivedVariable extends BaseType {
  dimension: string;
  exposure?: string;
  name: string;
  value: string;
}
export interface DerivedVariable extends _DerivedVariable {
  constructor: { new (): DerivedVariable };
}
export var DerivedVariable: { new (): DerivedVariable };

interface _DistalDetails extends BaseType {
  normalizationEnd: number;
}
export interface DistalDetails extends _DistalDetails {
  constructor: { new (): DistalDetails };
}
export var DistalDetails: { new (): DistalDetails };

/** Double >0 only */
export type DoubleGreaterThanZero = number;
type _DoubleGreaterThanZero = Primitive._number;

/** LEMS ComponentType for Dynamics */
interface _Dynamics extends BaseType {
  ConditionalDerivedVariable?: ConditionalDerivedVariable[];
  DerivedVariable?: DerivedVariable[];
}
export interface Dynamics extends _Dynamics {
  constructor: { new (): Dynamics };
}
export var Dynamics: { new (): Dynamics };

interface _EIF_cond_alpha_isfa_ista extends _basePyNNIaFCondCell {
  a: number;
  b: number;
  delta_T: number;
  tau_w: number;
  v_spike: number;
}
export interface EIF_cond_alpha_isfa_ista extends _EIF_cond_alpha_isfa_ista {
  constructor: { new (): EIF_cond_alpha_isfa_ista };
}
export var EIF_cond_alpha_isfa_ista: { new (): EIF_cond_alpha_isfa_ista };

interface _EIF_cond_exp_isfa_ista extends _basePyNNIaFCondCell {
  a: number;
  b: number;
  delta_T: number;
  tau_w: number;
  v_spike: number;
}
export interface EIF_cond_exp_isfa_ista extends _EIF_cond_exp_isfa_ista {
  constructor: { new (): EIF_cond_exp_isfa_ista };
}
export var EIF_cond_exp_isfa_ista: { new (): EIF_cond_exp_isfa_ista };

/** Individual electrical synaptic connection */
interface _ElectricalConnection extends _BaseConnectionNewFormat {
  synapse: string;
}
export interface ElectricalConnection extends _ElectricalConnection {
  constructor: { new (): ElectricalConnection };
}
export var ElectricalConnection: { new (): ElectricalConnection };

/** Projection between two populations consisting of analog connections (e.g. graded synapses) */
interface _ElectricalConnectionInstance extends _ElectricalConnection {}
export interface ElectricalConnectionInstance
  extends _ElectricalConnectionInstance {
  constructor: { new (): ElectricalConnectionInstance };
}
export var ElectricalConnectionInstance: {
  new (): ElectricalConnectionInstance;
};

/** Projection between two populations consisting of electrical connections (gap junctions) */
interface _ElectricalProjection extends _Base {
  postsynapticPopulation: string;
  presynapticPopulation: string;
  electricalConnection?: ElectricalConnection[];
  electricalConnectionInstance?: ElectricalConnectionInstance[];
}
export interface ElectricalProjection extends _ElectricalProjection {
  constructor: { new (): ElectricalProjection };
}
export var ElectricalProjection: { new (): ElectricalProjection };

interface _ExpCondSynapse extends _BasePynnSynapse {
  e_rev: number;
}
export interface ExpCondSynapse extends _ExpCondSynapse {
  constructor: { new (): ExpCondSynapse };
}
export var ExpCondSynapse: { new (): ExpCondSynapse };

interface _ExpCurrSynapse extends _BasePynnSynapse {}
export interface ExpCurrSynapse extends _ExpCurrSynapse {
  constructor: { new (): ExpCurrSynapse };
}
export var ExpCurrSynapse: { new (): ExpCurrSynapse };

/** Single explicit input. Introduced to test inputs in LEMS. Will probably be removed in favour of
 * inputs wrapped in inputList element */
interface _ExplicitInput extends BaseType {
  destination: string;
  input: string;
  target: string;
}
export interface ExplicitInput extends _ExplicitInput {
  constructor: { new (): ExplicitInput };
}
export var ExplicitInput: { new (): ExplicitInput };

interface _ExpOneSynapse extends _BaseConductanceBasedSynapse {
  tauDecay: string;
}
export interface ExpOneSynapse extends _ExpOneSynapse {
  constructor: { new (): ExpOneSynapse };
}
export var ExpOneSynapse: { new (): ExpOneSynapse };

interface _ExpThreeSynapse extends _BaseConductanceBasedSynapseTwo {
  tauDecay1: string;
  tauDecay2: string;
  tauRise: string;
}
export interface ExpThreeSynapse extends _ExpThreeSynapse {
  constructor: { new (): ExpThreeSynapse };
}
export var ExpThreeSynapse: { new (): ExpThreeSynapse };

interface _ExpTwoSynapse extends _BaseConductanceBasedSynapse {
  tauDecay: string;
  tauRise: string;
}
export interface ExpTwoSynapse extends _ExpTwoSynapse {
  constructor: { new (): ExpTwoSynapse };
}
export var ExpTwoSynapse: { new (): ExpTwoSynapse };

interface _ExtracellularProperties extends _Base {
  species?: Species[];
}
export interface ExtracellularProperties extends _ExtracellularProperties {
  constructor: { new (): ExtracellularProperties };
}
export var ExtracellularProperties: { new (): ExtracellularProperties };

interface _ExtracellularPropertiesLocal extends BaseType {
  species?: Species[];
}
export interface ExtracellularPropertiesLocal
  extends _ExtracellularPropertiesLocal {
  constructor: { new (): ExtracellularPropertiesLocal };
}
export var ExtracellularPropertiesLocal: {
  new (): ExtracellularPropertiesLocal;
};

interface _FitzHughNagumo1969Cell extends _BaseCell {
  a: string;
  b: string;
  I: string;
  phi: string;
  V0: string;
  W0: string;
}
export interface FitzHughNagumo1969Cell extends _FitzHughNagumo1969Cell {
  constructor: { new (): FitzHughNagumo1969Cell };
}
export var FitzHughNagumo1969Cell: { new (): FitzHughNagumo1969Cell };

interface _FitzHughNagumoCell extends _BaseCell {
  I: string;
}
export interface FitzHughNagumoCell extends _FitzHughNagumoCell {
  constructor: { new (): FitzHughNagumoCell };
}
export var FitzHughNagumoCell: { new (): FitzHughNagumoCell };

interface _FixedFactorConcentrationModel extends _Standalone {
  decayConstant: string;
  /** Should not be required, as it's present on the species element! */
  ion: string;
  restingConc: string;
  rho: string;
}
export interface FixedFactorConcentrationModel
  extends _FixedFactorConcentrationModel {
  constructor: { new (): FixedFactorConcentrationModel };
}
export var FixedFactorConcentrationModel: {
  new (): FixedFactorConcentrationModel;
};

interface _ForwardTransition extends _Base {
  from: string;
  to: string;
}
export interface ForwardTransition extends _ForwardTransition {
  constructor: { new (): ForwardTransition };
}
export var ForwardTransition: { new (): ForwardTransition };

interface _GapJunction extends _BaseSynapse {
  conductance: string;
}
export interface GapJunction extends _GapJunction {
  constructor: { new (): GapJunction };
}
export var GapJunction: { new (): GapJunction };

interface _GateFractional extends _Base {
  instances: number;
  notes?: string;
  q10Settings?: Q10Settings;
  subGate: GateFractionalSubgate[];
}
export interface GateFractional extends _GateFractional {
  constructor: { new (): GateFractional };
}
export var GateFractional: { new (): GateFractional };

interface _GateFractionalSubgate extends _Base {
  fractionalConductance: string;
  notes?: string;
  q10Settings?: Q10Settings;
  steadyState: HHVariable;
  timeCourse: HHTime;
}
export interface GateFractionalSubgate extends _GateFractionalSubgate {
  constructor: { new (): GateFractionalSubgate };
}
export var GateFractionalSubgate: { new (): GateFractionalSubgate };

interface _GateHHInstantaneous extends _Base {
  instances: number;
  notes?: string;
  steadyState: HHVariable;
}
export interface GateHHInstantaneous extends _GateHHInstantaneous {
  constructor: { new (): GateHHInstantaneous };
}
export var GateHHInstantaneous: { new (): GateHHInstantaneous };

interface _GateHHRates extends _Base {
  instances: number;
  forwardRate: HHRate;
  notes?: string;
  q10Settings?: Q10Settings;
  reverseRate: HHRate;
}
export interface GateHHRates extends _GateHHRates {
  constructor: { new (): GateHHRates };
}
export var GateHHRates: { new (): GateHHRates };

interface _GateHHRatesInf extends _Base {
  instances: number;
  forwardRate: HHRate;
  notes?: string;
  q10Settings?: Q10Settings;
  reverseRate: HHRate;
  steadyState: HHVariable;
}
export interface GateHHRatesInf extends _GateHHRatesInf {
  constructor: { new (): GateHHRatesInf };
}
export var GateHHRatesInf: { new (): GateHHRatesInf };

interface _GateHHRatesTau extends _Base {
  instances: number;
  forwardRate: HHRate;
  notes?: string;
  q10Settings?: Q10Settings;
  reverseRate: HHRate;
  timeCourse: HHTime;
}
export interface GateHHRatesTau extends _GateHHRatesTau {
  constructor: { new (): GateHHRatesTau };
}
export var GateHHRatesTau: { new (): GateHHRatesTau };

interface _GateHHRatesTauInf extends _Base {
  instances: number;
  forwardRate: HHRate;
  notes?: string;
  q10Settings?: Q10Settings;
  reverseRate: HHRate;
  steadyState: HHVariable;
  timeCourse: HHTime;
}
export interface GateHHRatesTauInf extends _GateHHRatesTauInf {
  constructor: { new (): GateHHRatesTauInf };
}
export var GateHHRatesTauInf: { new (): GateHHRatesTauInf };

interface _GateHHTauInf extends _Base {
  instances: number;
  notes?: string;
  q10Settings?: Q10Settings;
  steadyState: HHVariable;
  timeCourse: HHTime;
}
export interface GateHHTauInf extends _GateHHTauInf {
  constructor: { new (): GateHHTauInf };
}
export var GateHHTauInf: { new (): GateHHTauInf };

/** Note all sub elements for gateHHrates, gateHHratesTau, gateFractional etc. allowed here. Which are valid should be constrained by what type is set */
interface _GateHHUndetermined extends _Base {
  instances: number;
  type: gateTypes;
  forwardRate?: HHRate;
  notes?: string;
  q10Settings?: Q10Settings;
  reverseRate?: HHRate;
  steadyState?: HHVariable;
  subGate?: GateFractionalSubgate[];
  timeCourse?: HHTime;
}
export interface GateHHUndetermined extends _GateHHUndetermined {
  constructor: { new (): GateHHUndetermined };
}
export var GateHHUndetermined: { new (): GateHHUndetermined };

interface _GateKS extends _Base {
  instances: number;
  closedState: ClosedState[];
  forwardTransition: ForwardTransition[];
  notes?: string;
  openState: OpenState[];
  q10Settings?: Q10Settings;
  reverseTransition: ReverseTransition[];
  tauInfTransition: TauInfTransition[];
}
export interface GateKS extends _GateKS {
  constructor: { new (): GateKS };
}
export var GateKS: { new (): GateKS };

export type gateTypes =
  | "gateHHrates"
  | "gateHHratesTau"
  | "gateHHtauInf"
  | "gateHHratesInf"
  | "gateHHratesTauInf"
  | "gateHHInstantaneous"
  | "gateKS"
  | "gateFractional";
interface _gateTypes extends Primitive._string {
  content: gateTypes;
}

interface _GradedSynapse extends _BaseSynapse {
  conductance: string;
  delta: string;
  erev: string;
  k: string;
  Vth: string;
}
export interface GradedSynapse extends _GradedSynapse {
  constructor: { new (): GradedSynapse };
}
export var GradedSynapse: { new (): GradedSynapse };

interface _GridLayout extends BaseType {
  xSize: number;
  ySize?: number;
  zSize?: number;
}
export interface GridLayout extends _GridLayout {
  constructor: { new (): GridLayout };
}
export var GridLayout: { new (): GridLayout };

interface _HH_cond_exp extends _basePyNNCell {
  e_rev_E: number;
  e_rev_I: number;
  e_rev_K: number;
  e_rev_leak: number;
  e_rev_Na: number;
  g_leak: number;
  gbar_K: number;
  gbar_Na: number;
  v_offset: number;
}
export interface HH_cond_exp extends _HH_cond_exp {
  constructor: { new (): HH_cond_exp };
}
export var HH_cond_exp: { new (): HH_cond_exp };

interface _HHRate extends BaseType {
  midpoint?: string;
  rate?: string;
  scale?: string;
  type: string;
}
export interface HHRate extends _HHRate {
  constructor: { new (): HHRate };
}
export var HHRate: { new (): HHRate };

interface _HHTime extends BaseType {
  midpoint?: string;
  rate?: string;
  scale?: string;
  tau?: string;
  type: string;
}
export interface HHTime extends _HHTime {
  constructor: { new (): HHTime };
}
export var HHTime: { new (): HHTime };

interface _HHVariable extends BaseType {
  midpoint?: string;
  rate?: number;
  scale?: string;
  type: string;
}
export interface HHVariable extends _HHVariable {
  constructor: { new (): HHVariable };
}
export var HHVariable: { new (): HHVariable };

interface _IafCell extends _BaseCell {
  C: string;
  leakConductance: string;
  leakReversal: string;
  reset: string;
  thresh: string;
}
export interface IafCell extends _IafCell {
  constructor: { new (): IafCell };
}
export var IafCell: { new (): IafCell };

interface _IafRefCell extends _IafCell {
  refract: string;
}
export interface IafRefCell extends _IafRefCell {
  constructor: { new (): IafRefCell };
}
export var IafRefCell: { new (): IafRefCell };

interface _IafTauCell extends _BaseCell {
  leakReversal: string;
  reset: string;
  tau: string;
  thresh: string;
}
export interface IafTauCell extends _IafTauCell {
  constructor: { new (): IafTauCell };
}
export var IafTauCell: { new (): IafTauCell };

interface _IafTauRefCell extends _IafTauCell {
  refract: string;
}
export interface IafTauRefCell extends _IafTauRefCell {
  constructor: { new (): IafTauRefCell };
}
export var IafTauRefCell: { new (): IafTauRefCell };

interface _IF_cond_alpha extends _basePyNNIaFCondCell {}
export interface IF_cond_alpha extends _IF_cond_alpha {
  constructor: { new (): IF_cond_alpha };
}
export var IF_cond_alpha: { new (): IF_cond_alpha };

interface _IF_cond_exp extends _basePyNNIaFCondCell {}
export interface IF_cond_exp extends _IF_cond_exp {
  constructor: { new (): IF_cond_exp };
}
export var IF_cond_exp: { new (): IF_cond_exp };

interface _IF_curr_alpha extends _basePyNNIaFCell {}
export interface IF_curr_alpha extends _IF_curr_alpha {
  constructor: { new (): IF_curr_alpha };
}
export var IF_curr_alpha: { new (): IF_curr_alpha };

interface _IF_curr_exp extends _basePyNNIaFCell {}
export interface IF_curr_exp extends _IF_curr_exp {
  constructor: { new (): IF_curr_exp };
}
export var IF_curr_exp: { new (): IF_curr_exp };

interface _Include extends BaseType {
  segmentGroup: string;
}
export interface Include extends _Include {
  constructor: { new (): Include };
}
export var Include: { new (): Include };

interface _IncludeType extends BaseType {
  href?: string;
}
export interface IncludeType extends _IncludeType {
  constructor: { new (): IncludeType };
}
export var IncludeType: { new (): IncludeType };

interface _InhomogeneousParameter extends _Base {
  metric: Metric;
  variable: string;
  distal?: DistalDetails;
  proximal?: ProximalDetails;
}
export interface InhomogeneousParameter extends _InhomogeneousParameter {
  constructor: { new (): InhomogeneousParameter };
}
export var InhomogeneousParameter: { new (): InhomogeneousParameter };

interface _InhomogeneousValue extends BaseType {
  inhomogeneousParameter: string;
  value: string;
}
export interface InhomogeneousValue extends _InhomogeneousValue {
  constructor: { new (): InhomogeneousValue };
}
export var InhomogeneousValue: { new (): InhomogeneousValue };

/** Using a thin extension of ValueAcrossSegOrSegGroup to facilitate library generation (e.g. libNeuroML) */
interface _InitMembPotential extends _ValueAcrossSegOrSegGroup {}
export interface InitMembPotential extends _InitMembPotential {
  constructor: { new (): InitMembPotential };
}
export var InitMembPotential: { new (): InitMembPotential };

/** Subject to change as it gets tested with LEMS */
interface _Input extends BaseType {
  destination: string;
  fractionAlong: number;
  id: number;
  segmentId: number;
  target: string;
}
export interface Input extends _Input {
  constructor: { new (): Input };
}
export var Input: { new (): Input };

/** Subject to change as it gets tested with LEMS */
interface _InputList extends _Base {
  component: string;
  population: string;
  input: Input[];
}
export interface InputList extends _InputList {
  constructor: { new (): InputList };
}
export var InputList: { new (): InputList };

interface _Instance extends BaseType {
  i: number;
  id: number;
  j: number;
  k: number;
  location: Location;
}
export interface Instance extends _Instance {
  constructor: { new (): Instance };
}
export var Instance: { new (): Instance };

interface _IntracellularProperties extends BaseType {
  resistivity?: Resistivity[];
  species?: Species[];
}
export interface IntracellularProperties extends _IntracellularProperties {
  constructor: { new (): IntracellularProperties };
}
export var IntracellularProperties: { new (): IntracellularProperties };

interface _IntracellularProperties2CaPools extends _IntracellularProperties {}
export interface IntracellularProperties2CaPools
  extends _IntracellularProperties2CaPools {
  constructor: { new (): IntracellularProperties2CaPools };
}
export var IntracellularProperties2CaPools: {
  new (): IntracellularProperties2CaPools;
};

/** Note ionChannel and ionChannelHH are currently functionally identical. This is needed since many existing examples use ionChannel, some use ionChannelHH.
 * NeuroML v2beta4 should remove one of these, probably ionChannelHH. */
interface _IonChannel extends _IonChannelScalable {
  conductance?: string;
  species?: string;
  type?: channelTypes;
  gate?: GateHHUndetermined[];
  gateFractional?: GateFractional[];
  gateHHInstantaneous?: GateHHInstantaneous[];
  gateHHrates?: GateHHRates[];
  gateHHratesInf?: GateHHRatesInf[];
  gateHHratesTau?: GateHHRatesTau[];
  gateHHratesTauInf?: GateHHRatesTauInf[];
  gateHHtauInf?: GateHHTauInf[];
}
export interface IonChannel extends _IonChannel {
  constructor: { new (): IonChannel };
}
export var IonChannel: { new (): IonChannel };

/** Note ionChannel and ionChannelHH are currently functionally identical. This is needed since many existing examples use ionChannel, some use ionChannelHH.
 * NeuroML v2beta4 should remove one of these, probably ionChannelHH. */
interface _IonChannelHH extends _IonChannel {}
export interface IonChannelHH extends _IonChannelHH {
  constructor: { new (): IonChannelHH };
}
export var IonChannelHH: { new (): IonChannelHH };

/** Kinetic scheme based ion channel. */
interface _IonChannelKS extends _Standalone {
  conductance?: string;
  species?: string;
  gateKS?: GateKS[];
}
export interface IonChannelKS extends _IonChannelKS {
  constructor: { new (): IonChannelKS };
}
export var IonChannelKS: { new (): IonChannelKS };

interface _IonChannelScalable extends _Standalone {
  q10ConductanceScaling?: Q10ConductanceScaling[];
}
export interface IonChannelScalable extends _IonChannelScalable {
  constructor: { new (): IonChannelScalable };
}
export var IonChannelScalable: { new (): IonChannelScalable };

interface _Izhikevich2007Cell extends _BaseCellMembPotCap {
  a: string;
  b: string;
  c: string;
  d: string;
  k: string;
  v0: string;
  vpeak: string;
  vr: string;
  vt: string;
}
export interface Izhikevich2007Cell extends _Izhikevich2007Cell {
  constructor: { new (): Izhikevich2007Cell };
}
export var Izhikevich2007Cell: { new (): Izhikevich2007Cell };

interface _IzhikevichCell extends _BaseCell {
  a: string;
  b: string;
  c: string;
  d: string;
  thresh: string;
  v0: string;
}
export interface IzhikevichCell extends _IzhikevichCell {
  constructor: { new (): IzhikevichCell };
}
export var IzhikevichCell: { new (): IzhikevichCell };

interface _Layout extends BaseType {
  space: string;
  grid: GridLayout;
  random: RandomLayout;
  unstructured: UnstructuredLayout;
}
export interface Layout extends _Layout {
  constructor: { new (): Layout };
}
export var Layout: { new (): Layout };

interface _LinearGradedSynapse extends _BaseSynapse {
  conductance: string;
}
export interface LinearGradedSynapse extends _LinearGradedSynapse {
  constructor: { new (): LinearGradedSynapse };
}
export var LinearGradedSynapse: { new (): LinearGradedSynapse };

interface _Location extends BaseType {
  x: number;
  y: number;
  z: number;
}
export interface Location extends _Location {
  constructor: { new (): Location };
}
export var Location: { new (): Location };

interface _Member extends BaseType {
  segment: number;
}
export interface Member extends _Member {
  constructor: { new (): Member };
}
export var Member: { new (): Member };

interface _MembraneProperties extends BaseType {
  channelDensity?: ChannelDensity[];
  channelDensityGHK?: ChannelDensityGHK[];
  channelDensityGHK2?: ChannelDensityGHK2[];
  channelDensityNernst?: ChannelDensityNernst[];
  channelDensityNonUniform?: ChannelDensityNonUniform[];
  channelDensityNonUniformGHK?: ChannelDensityNonUniformGHK[];
  channelDensityNonUniformNernst?: ChannelDensityNonUniformNernst[];
  channelPopulation?: ChannelPopulation[];
  initMembPotential?: InitMembPotential[];
  specificCapacitance?: SpecificCapacitance[];
  spikeThresh?: SpikeThresh[];
}
export interface MembraneProperties extends _MembraneProperties {
  constructor: { new (): MembraneProperties };
}
export var MembraneProperties: { new (): MembraneProperties };

interface _MembraneProperties2CaPools extends _MembraneProperties {
  channelDensityNernstCa2?: ChannelDensityNernstCa2[];
}
export interface MembraneProperties2CaPools
  extends _MembraneProperties2CaPools {
  constructor: { new (): MembraneProperties2CaPools };
}
export var MembraneProperties2CaPools: { new (): MembraneProperties2CaPools };

/** An id string for pointing to an entry in an annotation element related to a MIRIAM resource. Based on metaid of SBML */
export type MetaId = string;
type _MetaId = Primitive._string;

/** Allowed metrics for InhomogeneousParam */
export type Metric = "Path Length from root";
interface _Metric extends Primitive._string {
  content: Metric;
}

/** Standalone element which is usually inside a single cell, but could be outside and
 * referenced by id. */
interface _Morphology extends _Standalone {
  segment: Segment[];
  segmentGroup?: SegmentGroup[];
}
export interface Morphology extends _Morphology {
  constructor: { new (): Morphology };
}
export var Morphology: { new (): Morphology };

interface _NamedDimensionalType extends BaseType {
  description?: string;
  dimension?: string;
  name: string;
}
export interface NamedDimensionalType extends _NamedDimensionalType {
  constructor: { new (): NamedDimensionalType };
}
export var NamedDimensionalType: { new (): NamedDimensionalType };

interface _Network extends _Standalone {
  temperature?: string;
  type?: networkTypes;
  cellSet?: CellSet[];
  continuousProjection?: ContinuousProjection[];
  electricalProjection?: ElectricalProjection[];
  explicitInput?: ExplicitInput[];
  extracellularProperties?: ExtracellularPropertiesLocal[];
  inputList?: InputList[];
  population: Population[];
  projection?: Projection[];
  region?: Region[];
  space?: Space[];
  synapticConnection?: SynapticConnection[];
}
export interface Network extends _Network {
  constructor: { new (): Network };
}
export var Network: { new (): Network };

export type networkTypes = "network" | "networkWithTemperature";
interface _networkTypes extends Primitive._string {
  content: networkTypes;
}

/** An id string for pointing to an entry in the NeuroLex ontology. Use of this attribute is a shorthand for a full
 * RDF based reference to the MIRIAM Resource urn:miriam:neurolex, with an bqbiol:is qualifier */
export type NeuroLexId = string;
type _NeuroLexId = Primitive._string;

interface _NeuroMLDocument extends _Standalone {
  adExIaFCell?: AdExIaFCell[];
  alphaCondSynapse?: AlphaCondSynapse[];
  alphaCurrentSynapse?: AlphaCurrentSynapse[];
  alphaCurrSynapse?: AlphaCurrSynapse[];
  alphaSynapse?: AlphaSynapse[];
  baseCell?: BaseCell[];
  biophysicalProperties?: BiophysicalProperties[];
  blockingPlasticSynapse?: BlockingPlasticSynapse[];
  cell?: Cell[];
  cell2CaPools?: Cell2CaPools[];
  ComponentType?: ComponentType[];
  compoundInput?: CompoundInput[];
  compoundInputDL?: CompoundInputDL[];
  decayingPoolConcentrationModel?: DecayingPoolConcentrationModel[];
  EIF_cond_alpha_isfa_ista?: EIF_cond_alpha_isfa_ista[];
  EIF_cond_exp_isfa_ista?: EIF_cond_exp_isfa_ista[];
  expCondSynapse?: ExpCondSynapse[];
  expCurrSynapse?: ExpCurrSynapse[];
  expOneSynapse?: ExpOneSynapse[];
  expThreeSynapse?: ExpThreeSynapse[];
  expTwoSynapse?: ExpTwoSynapse[];
  extracellularProperties?: ExtracellularProperties[];
  fitzHughNagumo1969Cell?: FitzHughNagumo1969Cell[];
  fitzHughNagumoCell?: FitzHughNagumoCell[];
  fixedFactorConcentrationModel?: FixedFactorConcentrationModel[];
  gapJunction?: GapJunction[];
  gradedSynapse?: GradedSynapse[];
  HH_cond_exp?: HH_cond_exp[];
  iafCell?: IafCell[];
  iafRefCell?: IafRefCell[];
  iafTauCell?: IafTauCell[];
  iafTauRefCell?: IafTauRefCell[];
  IF_cond_alpha?: IF_cond_alpha[];
  IF_cond_exp?: IF_cond_exp[];
  IF_curr_alpha?: IF_curr_alpha[];
  IF_curr_exp?: IF_curr_exp[];
  include?: IncludeType[];
  intracellularProperties?: IntracellularProperties[];
  ionChannel?: IonChannel[];
  ionChannelHH?: IonChannelHH[];
  ionChannelKS?: IonChannelKS[];
  izhikevich2007Cell?: Izhikevich2007Cell[];
  izhikevichCell?: IzhikevichCell[];
  linearGradedSynapse?: LinearGradedSynapse[];
  morphology?: Morphology[];
  network?: Network[];
  pinskyRinzelCA3Cell?: PinskyRinzelCA3Cell[];
  poissonFiringSynapse?: PoissonFiringSynapse[];
  pulseGenerator?: PulseGenerator[];
  pulseGeneratorDL?: PulseGeneratorDL[];
  rampGenerator?: RampGenerator[];
  rampGeneratorDL?: RampGeneratorDL[];
  silentSynapse?: SilentSynapse[];
  sineGenerator?: SineGenerator[];
  sineGeneratorDL?: SineGeneratorDL[];
  spikeArray?: SpikeArray[];
  spikeGenerator?: SpikeGenerator[];
  spikeGeneratorPoisson?: SpikeGeneratorPoisson[];
  spikeGeneratorRandom?: SpikeGeneratorRandom[];
  SpikeSourcePoisson?: SpikeSourcePoisson[];
  timedSynapticInput?: TimedSynapticInput[];
  transientPoissonFiringSynapse?: TransientPoissonFiringSynapse[];
  voltageClamp?: VoltageClamp[];
}
export interface NeuroMLDocument extends _NeuroMLDocument {
  constructor: { new (): NeuroMLDocument };
}
export var NeuroMLDocument: { new (): NeuroMLDocument };

/** A value for a physical quantity in NeuroML 2, e.g. 20, -60.0mV or 5nA */
export type Nml2Quantity = string;
type _Nml2Quantity = Primitive._string;

export type Nml2Quantity_capacitance = string;
type _Nml2Quantity_capacitance = Primitive._string;

export type Nml2Quantity_concentration = string;
type _Nml2Quantity_concentration = Primitive._string;

export type Nml2Quantity_conductance = string;
type _Nml2Quantity_conductance = Primitive._string;

export type Nml2Quantity_conductanceDensity = string;
type _Nml2Quantity_conductanceDensity = Primitive._string;

export type Nml2Quantity_conductancePerVoltage = string;
type _Nml2Quantity_conductancePerVoltage = Primitive._string;

export type Nml2Quantity_current = string;
type _Nml2Quantity_current = Primitive._string;

export type Nml2Quantity_currentDensity = string;
type _Nml2Quantity_currentDensity = Primitive._string;

export type Nml2Quantity_length = string;
type _Nml2Quantity_length = Primitive._string;

export type Nml2Quantity_none = string;
type _Nml2Quantity_none = Primitive._string;

export type Nml2Quantity_permeability = string;
type _Nml2Quantity_permeability = Primitive._string;

export type Nml2Quantity_pertime = string;
type _Nml2Quantity_pertime = Primitive._string;

export type Nml2Quantity_resistance = string;
type _Nml2Quantity_resistance = Primitive._string;

export type Nml2Quantity_rhoFactor = string;
type _Nml2Quantity_rhoFactor = Primitive._string;

export type Nml2Quantity_specificCapacitance = string;
type _Nml2Quantity_specificCapacitance = Primitive._string;

export type Nml2Quantity_temperature = string;
type _Nml2Quantity_temperature = Primitive._string;

export type Nml2Quantity_time = string;
type _Nml2Quantity_time = Primitive._string;

export type Nml2Quantity_voltage = string;
type _Nml2Quantity_voltage = Primitive._string;

/** An id attribute for elements which need to be identified uniquely (normally just within their parent element). */
export type NmlId = string;
type _NmlId = Primitive._string;

/** An attribute useful as id of segments, connections, etc: integer >=0 only! */
export type NonNegativeInteger = number;
type _NonNegativeInteger = Primitive._number;

/** Textual human readable notes related to the element in question. It's useful to put these into
 * the NeuroML files instead of XML comments, as the notes can be extracted and repeated in the files to which the NeuroML is mapped. */
export type Notes = string;
type _Notes = Primitive._string;

interface _OpenState extends _Base {}
export interface OpenState extends _OpenState {
  constructor: { new (): OpenState };
}
export var OpenState: { new (): OpenState };

interface _Parameter extends _NamedDimensionalType {}
export interface Parameter extends _Parameter {
  constructor: { new (): Parameter };
}
export var Parameter: { new (): Parameter };

interface _Path extends BaseType {
  from?: SegmentEndPoint;
  to?: SegmentEndPoint;
}
export interface Path extends _Path {
  constructor: { new (): Path };
}
export var Path: { new (): Path };

interface _PinskyRinzelCA3Cell extends _BaseCell {
  alphac: string;
  betac: string;
  cm: string;
  eCa: string;
  eK: string;
  eL: string;
  eNa: string;
  gAmpa: string;
  gc: string;
  gCa: string;
  gKahp: string;
  gKC: string;
  gKdr: string;
  gLd: string;
  gLs: string;
  gNa: string;
  gNmda: string;
  iDend: string;
  iSoma: string;
  pp: string;
  qd0: string;
}
export interface PinskyRinzelCA3Cell extends _PinskyRinzelCA3Cell {
  constructor: { new (): PinskyRinzelCA3Cell };
}
export var PinskyRinzelCA3Cell: { new (): PinskyRinzelCA3Cell };

interface _PlasticityMechanism extends BaseType {
  initReleaseProb: number;
  tauFac?: string;
  tauRec: string;
  type: PlasticityTypes;
}
export interface PlasticityMechanism extends _PlasticityMechanism {
  constructor: { new (): PlasticityMechanism };
}
export var PlasticityMechanism: { new (): PlasticityMechanism };

export type PlasticityTypes =
  | "tsodyksMarkramDepMechanism"
  | "tsodyksMarkramDepFacMechanism";
interface _PlasticityTypes extends Primitive._string {
  content: PlasticityTypes;
}

/** A 3D point with diameter. */
interface _Point3DWithDiam extends BaseType {
  diameter: number;
  x: number;
  y: number;
  z: number;
}
export interface Point3DWithDiam extends _Point3DWithDiam {
  constructor: { new (): Point3DWithDiam };
}
export var Point3DWithDiam: { new (): Point3DWithDiam };

interface _PoissonFiringSynapse extends _Standalone {
  averageRate: string;
  spikeTarget: string;
  synapse: string;
}
export interface PoissonFiringSynapse extends _PoissonFiringSynapse {
  constructor: { new (): PoissonFiringSynapse };
}
export var PoissonFiringSynapse: { new (): PoissonFiringSynapse };

interface _Population extends _Standalone {
  component: string;
  extracellularProperties?: string;
  size?: number;
  type?: populationTypes;
  instance: Instance[];
  layout?: Layout;
}
export interface Population extends _Population {
  constructor: { new (): Population };
}
export var Population: { new (): Population };

export type populationTypes = "population" | "populationList";
interface _populationTypes extends Primitive._string {
  content: populationTypes;
}

/** Integer >=1 only! */
export type PositiveInteger = number;
type _PositiveInteger = Primitive._number;

/** Projection (set of synaptic connections) between two populations */
interface _Projection extends _Base {
  postsynapticPopulation: string;
  presynapticPopulation: string;
  synapse: string;
  connection?: Connection[];
  connectionWD?: ConnectionWD[];
}
export interface Projection extends _Projection {
  constructor: { new (): Projection };
}
export var Projection: { new (): Projection };

/** Generic property with a tag and value */
interface _Property extends BaseType {
  tag: string;
  value: string;
}
export interface Property extends _Property {
  constructor: { new (): Property };
}
export var Property: { new (): Property };

interface _ProximalDetails extends BaseType {
  translationStart: number;
}
export interface ProximalDetails extends _ProximalDetails {
  constructor: { new (): ProximalDetails };
}
export var ProximalDetails: { new (): ProximalDetails };

/** Generates a constant current pulse of a certain amplitude (with dimensions for current) for a specified duration after a delay. */
interface _PulseGenerator extends _Standalone {
  amplitude: string;
  delay: string;
  duration: string;
}
export interface PulseGenerator extends _PulseGenerator {
  constructor: { new (): PulseGenerator };
}
export var PulseGenerator: { new (): PulseGenerator };

/** Generates a constant current pulse of a certain amplitude (non dimensional) for a specified duration after a delay. */
interface _PulseGeneratorDL extends _Standalone {
  amplitude: string;
  delay: string;
  duration: string;
}
export interface PulseGeneratorDL extends _PulseGeneratorDL {
  constructor: { new (): PulseGeneratorDL };
}
export var PulseGeneratorDL: { new (): PulseGeneratorDL };

interface _Q10ConductanceScaling extends BaseType {
  experimentalTemp: string;
  q10Factor: string;
}
export interface Q10ConductanceScaling extends _Q10ConductanceScaling {
  constructor: { new (): Q10ConductanceScaling };
}
export var Q10ConductanceScaling: { new (): Q10ConductanceScaling };

interface _Q10Settings extends BaseType {
  experimentalTemp?: string;
  fixedQ10?: string;
  q10Factor?: string;
  type: string;
}
export interface Q10Settings extends _Q10Settings {
  constructor: { new (): Q10Settings };
}
export var Q10Settings: { new (): Q10Settings };

interface _RampGenerator extends _Standalone {
  baselineAmplitude: string;
  delay: string;
  duration: string;
  finishAmplitude: string;
  startAmplitude: string;
}
export interface RampGenerator extends _RampGenerator {
  constructor: { new (): RampGenerator };
}
export var RampGenerator: { new (): RampGenerator };

interface _RampGeneratorDL extends _Standalone {
  baselineAmplitude: string;
  delay: string;
  duration: string;
  finishAmplitude: string;
  startAmplitude: string;
}
export interface RampGeneratorDL extends _RampGeneratorDL {
  constructor: { new (): RampGeneratorDL };
}
export var RampGeneratorDL: { new (): RampGeneratorDL };

interface _RandomLayout extends BaseType {
  number: number;
  region: string;
}
export interface RandomLayout extends _RandomLayout {
  constructor: { new (): RandomLayout };
}
export var RandomLayout: { new (): RandomLayout };

interface _ReactionScheme extends _Base {
  source: string;
  type: string;
}
export interface ReactionScheme extends _ReactionScheme {
  constructor: { new (): ReactionScheme };
}
export var ReactionScheme: { new (): ReactionScheme };

interface _Region extends _Base {
  space?: string;
}
export interface Region extends _Region {
  constructor: { new (): Region };
}
export var Region: { new (): Region };

interface _Requirement extends _NamedDimensionalType {}
export interface Requirement extends _Requirement {
  constructor: { new (): Requirement };
}
export var Requirement: { new (): Requirement };

/** Using a thin extension of ValueAcrossSegOrSegGroup to facilitate library generation (e.g. libNeuroML) */
interface _Resistivity extends _ValueAcrossSegOrSegGroup {}
export interface Resistivity extends _Resistivity {
  constructor: { new (): Resistivity };
}
export var Resistivity: { new (): Resistivity };

interface _ReverseTransition extends _Base {
  from: string;
  to: string;
}
export interface ReverseTransition extends _ReverseTransition {
  constructor: { new (): ReverseTransition };
}
export var ReverseTransition: { new (): ReverseTransition };

interface _Segment extends _BaseNonNegativeIntegerId {
  name?: string;
  distal: Point3DWithDiam;
  parent?: SegmentParent;
  proximal?: Point3DWithDiam;
}
export interface Segment extends _Segment {
  constructor: { new (): Segment };
}
export var Segment: { new (): Segment };

interface _SegmentEndPoint extends BaseType {
  segment: number;
}
export interface SegmentEndPoint extends _SegmentEndPoint {
  constructor: { new (): SegmentEndPoint };
}
export var SegmentEndPoint: { new (): SegmentEndPoint };

interface _SegmentGroup extends _Base {
  annotation?: Annotation;
  include?: Include[];
  inhomogeneousParameter?: InhomogeneousParameter[];
  member?: Member[];
  notes?: string;
  path?: Path[];
  property?: Property[];
  subTree?: SubTree[];
}
export interface SegmentGroup extends _SegmentGroup {
  constructor: { new (): SegmentGroup };
}
export var SegmentGroup: { new (): SegmentGroup };

interface _SegmentParent extends BaseType {
  fractionAlong?: number;
  segment: number;
}
export interface SegmentParent extends _SegmentParent {
  constructor: { new (): SegmentParent };
}
export var SegmentParent: { new (): SegmentParent };

interface _SilentSynapse extends _BaseSynapse {}
export interface SilentSynapse extends _SilentSynapse {
  constructor: { new (): SilentSynapse };
}
export var SilentSynapse: { new (): SilentSynapse };

interface _SineGenerator extends _Standalone {
  amplitude: string;
  delay: string;
  duration: string;
  period: string;
  phase: string;
}
export interface SineGenerator extends _SineGenerator {
  constructor: { new (): SineGenerator };
}
export var SineGenerator: { new (): SineGenerator };

interface _SineGeneratorDL extends _Standalone {
  amplitude: string;
  delay: string;
  duration: string;
  period: string;
  phase: string;
}
export interface SineGeneratorDL extends _SineGeneratorDL {
  constructor: { new (): SineGeneratorDL };
}
export var SineGeneratorDL: { new (): SineGeneratorDL };

interface _Space extends _Base {
  basedOn?: allowedSpaces;
  structure?: SpaceStructure;
}
export interface Space extends _Space {
  constructor: { new (): Space };
}
export var Space: { new (): Space };

interface _SpaceStructure extends BaseType {
  xSpacing: number;
  xStart?: number;
  ySpacing?: number;
  yStart?: number;
  zSpacing?: number;
  zStart?: number;
}
export interface SpaceStructure extends _SpaceStructure {
  constructor: { new (): SpaceStructure };
}
export var SpaceStructure: { new (): SpaceStructure };

interface _Species extends _ValueAcrossSegOrSegGroup {
  concentrationModel: string;
  id: string;
  initialConcentration: string;
  initialExtConcentration: string;
  /** Specifying the ion here again is redundant, the ion name should be the same as id. Kept for now
   * until LEMS implementation can select by id. TODO: remove. */
  ion?: string;
}
export interface Species extends _Species {
  constructor: { new (): Species };
}
export var Species: { new (): Species };

/** Using a thin extension of ValueAcrossSegOrSegGroup to facilitate library generation (e.g. libNeuroML) */
interface _SpecificCapacitance extends _ValueAcrossSegOrSegGroup {}
export interface SpecificCapacitance extends _SpecificCapacitance {
  constructor: { new (): SpecificCapacitance };
}
export var SpecificCapacitance: { new (): SpecificCapacitance };

interface _Spike extends _BaseNonNegativeIntegerId {
  time: string;
}
export interface Spike extends _Spike {
  constructor: { new (): Spike };
}
export var Spike: { new (): Spike };

interface _SpikeArray extends _Standalone {
  spike?: Spike[];
}
export interface SpikeArray extends _SpikeArray {
  constructor: { new (): SpikeArray };
}
export var SpikeArray: { new (): SpikeArray };

interface _SpikeGenerator extends _Standalone {
  period: string;
}
export interface SpikeGenerator extends _SpikeGenerator {
  constructor: { new (): SpikeGenerator };
}
export var SpikeGenerator: { new (): SpikeGenerator };

interface _SpikeGeneratorPoisson extends _Standalone {
  averageRate: string;
}
export interface SpikeGeneratorPoisson extends _SpikeGeneratorPoisson {
  constructor: { new (): SpikeGeneratorPoisson };
}
export var SpikeGeneratorPoisson: { new (): SpikeGeneratorPoisson };

interface _SpikeGeneratorRandom extends _Standalone {
  maxISI: string;
  minISI: string;
}
export interface SpikeGeneratorRandom extends _SpikeGeneratorRandom {
  constructor: { new (): SpikeGeneratorRandom };
}
export var SpikeGeneratorRandom: { new (): SpikeGeneratorRandom };

interface _SpikeSourcePoisson extends _Standalone {
  duration: string;
  rate: string;
  start: string;
}
export interface SpikeSourcePoisson extends _SpikeSourcePoisson {
  constructor: { new (): SpikeSourcePoisson };
}
export var SpikeSourcePoisson: { new (): SpikeSourcePoisson };

/** Using a thin extension of ValueAcrossSegOrSegGroup to facilitate library generation (e.g. libNeuroML) */
interface _SpikeThresh extends _ValueAcrossSegOrSegGroup {}
export interface SpikeThresh extends _SpikeThresh {
  constructor: { new (): SpikeThresh };
}
export var SpikeThresh: { new (): SpikeThresh };

/** Elements which can stand alone and be referenced by id, e.g. cell, morphology. */
interface _Standalone extends _Base {
  metaid?: string;
  annotation?: Annotation;
  notes?: string;
  property?: Property[];
}
export interface Standalone extends _Standalone {
  constructor: { new (): Standalone };
}
export var Standalone: { new (): Standalone };

interface _SubTree extends BaseType {
  from?: SegmentEndPoint;
  to?: SegmentEndPoint;
}
export interface SubTree extends _SubTree {
  constructor: { new (): SubTree };
}
export var SubTree: { new (): SubTree };

/** Single explicit connection. Introduced to test connections in LEMS. Will probably be removed in favour of
 * connections wrapped in projection element */
interface _SynapticConnection extends BaseType {
  destination?: string;
  from: string;
  synapse: string;
  to: string;
}
export interface SynapticConnection extends _SynapticConnection {
  constructor: { new (): SynapticConnection };
}
export var SynapticConnection: { new (): SynapticConnection };

interface _TauInfTransition extends _Base {
  from: string;
  to: string;
  steadyState: HHVariable;
  timeCourse: HHTime;
}
export interface TauInfTransition extends _TauInfTransition {
  constructor: { new (): TauInfTransition };
}
export var TauInfTransition: { new (): TauInfTransition };

interface _TimedSynapticInput extends _Standalone {
  spikeTarget: string;
  synapse: string;
  spike?: Spike[];
}
export interface TimedSynapticInput extends _TimedSynapticInput {
  constructor: { new (): TimedSynapticInput };
}
export var TimedSynapticInput: { new (): TimedSynapticInput };

interface _TransientPoissonFiringSynapse extends _Standalone {
  averageRate: string;
  delay: string;
  duration: string;
  spikeTarget: string;
  synapse: string;
}
export interface TransientPoissonFiringSynapse
  extends _TransientPoissonFiringSynapse {
  constructor: { new (): TransientPoissonFiringSynapse };
}
export var TransientPoissonFiringSynapse: {
  new (): TransientPoissonFiringSynapse;
};

interface _UnstructuredLayout extends BaseType {
  number: number;
}
export interface UnstructuredLayout extends _UnstructuredLayout {
  constructor: { new (): UnstructuredLayout };
}
export var UnstructuredLayout: { new (): UnstructuredLayout };

interface _ValueAcrossSegOrSegGroup extends BaseType {
  segment?: string;
  segmentGroup?: string;
  value?: string;
}
export interface ValueAcrossSegOrSegGroup extends _ValueAcrossSegOrSegGroup {
  constructor: { new (): ValueAcrossSegOrSegGroup };
}
export var ValueAcrossSegOrSegGroup: { new (): ValueAcrossSegOrSegGroup };

interface _VariableParameter extends BaseType {
  parameter: string;
  segmentGroup: string;
  inhomogeneousValue?: InhomogeneousValue;
}
export interface VariableParameter extends _VariableParameter {
  constructor: { new (): VariableParameter };
}
export var VariableParameter: { new (): VariableParameter };

interface _VoltageClamp extends _Standalone {
  delay: string;
  duration: string;
  simpleSeriesResistance: string;
  targetVoltage: string;
}
export interface VoltageClamp extends _VoltageClamp {
  constructor: { new (): VoltageClamp };
}
export var VoltageClamp: { new (): VoltageClamp };

/** Double restricted to between 1 and 0 */
export type ZeroToOne = number;
type _ZeroToOne = Primitive._number;

export interface document extends BaseType {
  /** The root NeuroML element. */
  neuroml: NeuroMLDocument;
}
export var document: document;
