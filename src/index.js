import clipboard from './reducers/clipboard/clipboard_actions'
import elements from './reducers/elements/elements_actions'
import elementsThunks from './reducers/elements/elements_thunks'
import selection from './reducers/elementSelection/elementSelection_actions'
import treeOperations from './utils/treeOperations';

import _clipboard from './reducers/clipboard/clipboard'
import _elements from './reducers/elements/elements'
import _elementSelection from './reducers/elementSelection/elementSelection'

// reducers
export default {
    clipboard: _clipboard,
    elements: _elements,
    elementSelection: _elementSelection
};

// clipboard
export const setCopiedStyle = (value) => clipboard.setCopiedStyle(value)
export const setCopiedElement = (value) => clipboard.setCopiedElement(value)
export const setCopiedElementTree = (element) => clipboard.setCopiedElementTree(element)
export const copy = () => clipboard.copy()
export const copyStyle = () => clipboard.copyStyle()
export const paste = () => clipboard.paste()

// elements
export const nextId = () => elements.nextId()
export const bumpId = () => elements.bumpId()
export const resetId = () => elements.resetId()
export const setId = (id) => elements.setId(id)
export const addElement = (elementType, parent_id, style, data) => elements.addElement(elementType, parent_id, style, data)
export const replaceElement = (target_id, elementType, parent_id, style, data) => elements.replaceElement(target_id, elementType, parent_id, style, data)
export const clearElements = () => elements.clearElements()
export const _setElements = (value) => elements.setElements(value)
export const _applyStyle = (id, style, resolution) => elements.applyStyle(id, style, resolution)
export const applyData = (id, data) => elements.applyData(id, data)
export const applyDataField = (id, fieldName, fieldType) => elements.applyDataField(id, fieldName, fieldType)
export const applyStyleField = (id, fieldName, cssKey) => elements.applyStyleField(id, fieldName, cssKey)
export const applyRole = (id, role) => elements.applyRole(id, role)
export const applyClass = (id, value) => elements.applyClass(id, value)
export const applyVars = (id, key, value) => elements.applyVars(id, key, value)
export const clearVars = (id, key) => elements.clearVars(id, key)
export const deleteElement = (id) => elements.deleteElement(id)
export const switchElementsOrder = (id1, id2) => elements.switchElementsOrder(id1, id2)
export const previewData = (id, data) => elements.previewData(id, data)
export const previewStyle = (id, style) => elements.previewData(id, style)
export const removeElements = (ids) => elements.removeElements(ids)
export const renameTag = (id, value) => elements.renameTag(id, value)
export const renameLayer = (id, value) => elements.renameLayer(id, value)
export const expandView = (id, isClosed) => elements.expandView(id, isClosed)
export const loadResolution = (value) => elements.loadResolution(value)
export const toggleVisibility = (element_id) => elements.toggleVisibility(element_id)
export const addOrReplace = (selected_element_type, selected_element_id, elementType, parent_id, style, data = {}) => elements.addOrReplace(selected_element_type, selected_element_id, elementType, parent_id, style, data = {})

// elements thunks
export const addPlaceholder = () => elementsThunks.addPlaceholder();
export const addText = () => elementsThunks.addText();
export const addImage = () => elementsThunks.addImage();
export const addVerticalView = (rows) => elementsThunks.addVerticalView(rows);
export const addVerticalViewBySizes = (sizes) => elementsThunks.addVerticalViewBySizes(sizes);
export const addHorizontalView = (columns) => elementsThunks.addHorizontalView(columns);
export const addHorizontalViewBySizes = (sizes) => elementsThunks.addHorizontalViewBySizes(sizes);
export const addView = (data) => elementsThunks.addView(data);
export const addDivider = (data) => elementsThunks.addDivider(data);
export const addSnippet = (data) => elementsThunks.addSnippet(data);
export const selectRoot = () => elementsThunks.selectRoot();
export const addPlaceholderToRoot = () => elementsThunks.addPlaceholderToRoot();
export const applyStyle = (id, style) => elementsThunks.applyStyle(id, style);
export const injectSnippet = (rootId, rootParentId, rootOrder, snippet) => elementsThunks.injectSnippet(rootId, rootParentId, rootOrder, snippet);
export const resetScreen = () => elementsThunks.resetScreen();
export const applyDataContentForCurrentElement = (data) => elementsThunks.applyDataContentForCurrentElement(data);
export const applyDataFieldForCurrentElement = (fieldName, fieldType) => elementsThunks.applyDataFieldForCurrentElement(fieldName, fieldType);
export const applyStyleFieldForCurrentElement = (fieldName, cssKey) => elementsThunks.applyStyleFieldForCurrentElement(fieldName, cssKey);
export const setElements = (value) => elementsThunks.setElements(value);
export const pasteCopiedStyle = (element) => elementsThunks.pasteCopiedStyle(element);
export const pasteCopiedElement = (element) => elementsThunks.pasteCopiedElement(element);

// selection
export const setSelectedElement = (id, parent_id, elementType) => selection.setSelectedElement(id, parent_id, elementType);
export const setElementRect = (elementRect) => selection.setElementRect(elementRect);
export const findOtherElement = (id) => selection.findOtherElement(id);
export const refreshSelector = (delay = 0) => selection.refreshSelector(delay);
export const setSelectedElementAndRefresh = (id, parent_id, elementType) => selection.setSelectedElementAndRefresh(id, parent_id, elementType);

// tree operations
export const getParentId = (selection) => treeOperations.getParentId(selection);
export const findOrderLowerThan = (items, order) => treeOperations.findOrderLowerThan(items, order);
export const findOrderGreaterThan = (items, order) => treeOperations.findOrderGreaterThan(items, order);
export const findMaxOrderForParentId = (elements, parent_id) => treeOperations.findMaxOrderForParentId(elements, parent_id);
export const findMinOrder = (elements) => treeOperations.findMinOrder(elements);
export const findMaxOrder = (elements) => treeOperations.findMaxOrder(elements);
export const getItem = (elements, selectedElementId) => treeOperations.getItem(elements, selectedElementId);
export const getChildren = (elements, parent_id) => treeOperations.getChildren(elements, parent_id);
export const getSiblings = (elements, selectedElementId) => treeOperations.getSiblings(elements, selectedElementId);
export const aboveItem = (state, selectedElementId) => treeOperations.aboveItem(state, selectedElementId);
export const belowItem = (state, selectedElementId) => treeOperations.belowItem(state, selectedElementId);
export const firstChild = (state, selectedElementId) => treeOperations.firstChild(state, selectedElementId);
export const root = (state) => treeOperations.root(state);
export const getElementsOrder = (state, selectedElementId) => treeOperations.getElementsOrder(state, selectedElementId);
export const parent = (state, selectedElementId) => treeOperations.parent(state, selectedElementId);
export const treeElements = (state, elementId) => treeOperations.treeElements(state, elementId);
export const cleanTreeFromEmpty = () => treeOperations.cleanTreeFromEmpty();
export const treeElementIds = () => treeOperations.treeElementIds();
export const getMaxId = (elements) => treeOperations.getMaxId(elements);
export const getMaxOrder = (state, parent_id) => treeOperations.getMaxOrder(state, parent_id);
export const filterOtherModes = (elements, elementId, currentModeId) => treeOperations.getMaxOrder(elements, elementId, currentModeId);
export const childIdsOrder = (present, childIds) => treeOperations.filterOtherModes(present, childIds);
export const identifyRole = (element) => treeOperations.identifyRole(element);
export const selectedElement = (state, elementSelection) => treeOperations.selectedElement(state, elementSelection);
export const getRootHeight = (state, otherHeight) => treeOperations.getRootHeight(state, otherHeight);