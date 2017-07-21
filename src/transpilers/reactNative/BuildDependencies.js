export class BuildDependencies {
    constructor() {
        this.clear();
    }

    clear() {
        this.dependencies = ['StyleSheet'];
    }

    addDependency(dependency) {
        if (this.dependencies.indexOf(dependency) < 0) {
            this.dependencies.push(dependency);
        }
    }

    addDependencyByElementType(elementType) {
        let dependency;

        switch (elementType) {
            case 'TEXT':
                dependency = 'Text';
                break;
            case 'IMAGE':
                dependency  = 'Image';
                break;
            default:
                dependency  = 'View';
                break;
        }

        this.addDependency(dependency);
    }

    allDependencies() {
        return this.dependencies;
    }
}

export default BuildDependencies;