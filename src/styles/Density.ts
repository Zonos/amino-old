import { IDensityScale } from '../schemas/IDensityScale';

class CompactDensity implements IDensityScale {
  base = "15px"
}

class DefaultDensity implements IDensityScale {
  base = "25px"
}

class ComfortableDensity implements IDensityScale {
  base = "40px"
}

export const Density = {
  compact: new CompactDensity(),
  default: new DefaultDensity(),
  comfortable: new ComfortableDensity(),

  // DEPRECATED
  spacing1: '25px',
}
