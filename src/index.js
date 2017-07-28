import clipboard from './reducers/clipboard/clipboard_actions'
import elements from './reducers/elements/elements_actions'
import elementsThunks from './reducers/elements/elements_thunks'
import selection from './reducers/elementSelection/elementSelection_actions'

import {ActionTypes} from './reducers/elements/elements';
import treeOperations from './utils/treeOperations';

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

// clipboard
export const setCopiedStyle = (value) => clipboard.setCopiedStyle(value)
export const setCopiedElement = (value) => clipboard.setCopiedElement(value)
export const setCopiedElementTree = (element) => clipboard.setCopiedElementTree(element)
export const copy = () => clipboard.copy()
export const copyStyle = () => clipboard.copyStyle()
export const paste = () => clipboard.paste()

// elements
export const addElement = (elementType, parent_id, style, data) => elements.addElement(elementType, parent_id, style, data)
export const replaceElement = (target_id, elementType, parent_id, style, data) => elements.replaceElement(target_id, elementType, parent_id, style, data)
export const clearElements = () => elements.clearElements()
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
export const setElements = (value) => elements.setElements(value);

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
export const pasteCopiedStyle = (element) => elementsThunks.pasteCopiedStyle(element);
export const pasteCopiedElement = (element) => elementsThunks.pasteCopiedElement(element);
export const pasteSketch = (clipboardText) => elementsThunks.pasteSketch(clipboardText);

// selection
export const setSelectedElement = (id, parent_id, elementType) => selection.setSelectedElement(id, parent_id, elementType);
export const setElementRect = (elementRect) => selection.setElementRect(elementRect);
export const findOtherElement = (id) => selection.findOtherElement(id);
export const refreshSelector = (delay = 0) => selection.refreshSelector(delay);
export const setSelectedElementAndRefresh = (id, parent_id, elementType) => selection.setSelectedElementAndRefresh(id, parent_id, elementType);

export const ActionTypesElements = ActionTypes;

export default {
    ActionTypesElements: ActionTypes,
    setCopiedStyle: (value) => clipboard.setCopiedStyle(value),
    setCopiedElement: (value) => clipboard.setCopiedElement(value),
    setCopiedElementTree: (element) => clipboard.setCopiedElementTree(element),
    copy: () => clipboard.copy(),
    copyStyle: () => clipboard.copyStyle(),
    paste: () => clipboard.paste(),
    addElement: (elementType, parent_id, style, data) => elements.addElement(elementType, parent_id, style, data),
    replaceElement: (target_id, elementType, parent_id, style, data) => elements.replaceElement(target_id, elementType, parent_id, style, data),
    clearElements: () => elements.clearElements(),
    _applyStyle: (id, style, resolution) => elements.applyStyle(id, style, resolution),
    applyData: (id, data) => elements.applyData(id, data),
    applyDataField: (id, fieldName, fieldType) => elements.applyDataField(id, fieldName, fieldType),
    applyStyleField: (id, fieldName, cssKey) => elements.applyStyleField(id, fieldName, cssKey),
    applyRole: (id, role) => elements.applyRole(id, role),
    applyClass: (id, value) => elements.applyClass(id, value),
    applyVars: (id, key, value) => elements.applyVars(id, key, value),
    clearVars: (id, key) => elements.clearVars(id, key),
    deleteElement: (id) => elements.deleteElement(id),
    switchElementsOrder: (id1, id2) => elements.switchElementsOrder(id1, id2),
    previewData: (id, data) => elements.previewData(id, data),
    previewStyle: (id, style) => elements.previewStyle(id, style),
    removeElements: (ids) => elements.removeElements(ids),
    renameTag: (id, value) => elements.renameTag(id, value),
    renameLayer: (id, value) => elements.renameLayer(id, value),
    expandView: (id, isClosed) => elements.expandView(id, isClosed),
    loadResolution: (value) => elements.loadResolution(value),
    toggleVisibility: (element_id) => elements.toggleVisibility(element_id),
    addOrReplace: (selected_element_type, selected_element_id, elementType, parent_id, style, data = {}) => elements.addOrReplace(selected_element_type, selected_element_id, elementType, parent_id, style, data),
    addPlaceholder: () => elementsThunks.addPlaceholder(),
    addText: () => elementsThunks.addText(),
    addImage: () => elementsThunks.addImage(),
    addVerticalView: (rows) => elementsThunks.addVerticalView(rows),
    addVerticalViewBySizes: (sizes) => elementsThunks.addVerticalViewBySizes(sizes),
    addHorizontalView: (columns) => elementsThunks.addHorizontalView(columns),
    addHorizontalViewBySizes: (sizes) => elementsThunks.addHorizontalViewBySizes(sizes),
    addView: (data) => elementsThunks.addView(data),
    addDivider: (data) => elementsThunks.addDivider(data),
    addSnippet: (data) => elementsThunks.addSnippet(data),
    selectRoot: () => elementsThunks.selectRoot(),
    addPlaceholderToRoot: () => elementsThunks.addPlaceholderToRoot(),
    applyStyle: (id, style) => elementsThunks.applyStyle(id, style),
    injectSnippet: (rootId, rootParentId, rootOrder, snippet) => elementsThunks.injectSnippet(rootId, rootParentId, rootOrder, snippet),
    resetScreen: () => elementsThunks.resetScreen(),
    applyDataContentForCurrentElement: (data) => elementsThunks.applyDataContentForCurrentElement(data),
    applyDataFieldForCurrentElement: (fieldName, fieldType) => elementsThunks.applyDataFieldForCurrentElement(fieldName, fieldType),
    applyStyleFieldForCurrentElement: (fieldName, cssKey) => elementsThunks.applyStyleFieldForCurrentElement(fieldName, cssKey),
    setElements: (value) => elements.setElements(value),
    pasteCopiedStyle: (element) => elementsThunks.pasteCopiedStyle(element),
    pasteCopiedElement: (element) => elementsThunks.pasteCopiedElement(element),
    pasteSketch: (clipboardText) => elementsThunks.pasteSketch(clipboardText),
    setSelectedElement: (id, parent_id, elementType) => selection.setSelectedElement(id, parent_id, elementType),
    setElementRect: (elementRect) => selection.setElementRect(elementRect),
    findOtherElement: (id) => selection.findOtherElement(id),
    refreshSelector: (delay = 0) => selection.refreshSelector(delay),
    setSelectedElementAndRefresh: (id, parent_id, elementType) => selection.setSelectedElementAndRefresh(id, parent_id, elementType),

    getParentId: (selection) => treeOperations.getParentId(selection),
    findOrderLowerThan: (items, order) => treeOperations.findOrderLowerThan(items, order),
    findOrderGreaterThan: (items, order) => treeOperations.findOrderGreaterThan(items, order),
    findMaxOrderForParentId: (elements, parent_id) => treeOperations.findMaxOrderForParentId(elements, parent_id),
    findMinOrder: (elements) => treeOperations.findMinOrder(elements),
    findMaxOrder: (elements) => treeOperations.findMaxOrder(elements),
    getItem: (elements, selectedElementId) => treeOperations.getItem(elements, selectedElementId),
    getChildren: (elements, parent_id) => treeOperations.getChildren(elements, parent_id),
    getSiblings: (elements, selectedElementId) => treeOperations.getSiblings(elements, selectedElementId),
    aboveItem: (state, selectedElementId) => treeOperations.aboveItem(state, selectedElementId),
    belowItem: (state, selectedElementId) => treeOperations.belowItem(state, selectedElementId),
    firstChild: (state, selectedElementId) => treeOperations.firstChild(state, selectedElementId),
    root: (state) => treeOperations.root(state),
    getElementsOrder: (state, selectedElementId) => treeOperations.getElementsOrder(state, selectedElementId),
    parent: (state, selectedElementId) => treeOperations.parent(state, selectedElementId),
    treeElements: (state, elementId) => treeOperations.treeElements(state, elementId),
    cleanTreeFromEmpty: () => treeOperations.cleanTreeFromEmpty(),
    treeElementIds: () => treeOperations.treeElementIds(),
    getMaxId: (elements) => treeOperations.getMaxId(elements),
    getMaxOrder: (state, parent_id) => treeOperations.getMaxOrder(state, parent_id),
    filterOtherModes: (elements, elementId, currentModeId) => treeOperations.filterOtherModes(elements, elementId, currentModeId),
    childIdsOrder: (present, childIds) => treeOperations.childIdsOrder(present, childIds),
    identifyRole: (element) => treeOperations.identifyRole(element),
    selectedElement: (state, elementSelection) => treeOperations.selectedElement(state, elementSelection),
    getRootHeight: (state, otherHeight) => treeOperations.getRootHeight(state, otherHeight),
}