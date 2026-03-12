export function attachLimits(TargetClass) {
  class LimitsExtension {
    async decrementFreeParsing() {
      return {
        success: true,
        parsing_left: -1,
        reason: 'limit_disabled'
      };
    }
  }

  Object.assign(TargetClass.prototype, Object.getOwnPropertyDescriptors(LimitsExtension.prototype));
  delete TargetClass.prototype.constructor;
}
