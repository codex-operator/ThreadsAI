export function attachLimits(TargetClass) {
  class LimitsExtension {
    async decrementFreeParsing() {
      return {
        success: true,
        parsing_left: Number.MAX_SAFE_INTEGER,
        reason: "unlimited",
      };
    }
  }

  Object.assign(
    TargetClass.prototype,
    Object.getOwnPropertyDescriptors(LimitsExtension.prototype),
  );
  delete TargetClass.prototype.constructor;
}
