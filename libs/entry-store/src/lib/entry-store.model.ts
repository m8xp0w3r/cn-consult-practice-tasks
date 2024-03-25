/**
 * Created by PHausmann on 30.07.14.
 */

import { Entry } from './entry.model';

/**
 * A store of Entry-objects.
 */
export class EntryStore
{
  public entries: Entry[];

  constructor()
  {
    this.entries = [];
  }

  /**
   * Adds the given Entry.
   *
   * @param _entry {Entry} The Entry we have to add.
   */
  addEntry(_entry: Entry)
  {
    this.entries.push(_entry);
  }
}
